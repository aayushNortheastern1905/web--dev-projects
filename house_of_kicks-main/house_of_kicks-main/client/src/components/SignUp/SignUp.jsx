//जय श्री राम
import React, { useState, useEffect, useCallback } from 'react';
import { signUp } from '../../api/api';
import routes from '../../Routes';
import './SignUpStyles/signUpStyles.css'; 
import '../../Styles/common.css'


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const validateForm = () => {
  //   // Clear all previous errors
  //   setErrors({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //     phone: '',
  //   });

  //   let isValid = true;

  //   // Validation for First Name
  //   if (formData.firstName.trim() === '' || !/^[A-Za-z]+$/.test(formData.firstName)) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       firstName: formData.firstName.trim() === '' ? 'First Name is required' : 'Only alphabets allowed',
  //     }));
  //     isValid = false;
  //   }

  //   // Validation for Last Name
  //   if (formData.lastName.trim() === '' || !/^[A-Za-z]+$/.test(formData.lastName)) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       lastName: formData.lastName.trim() === '' ? 'Last Name is required' : 'Only alphabets allowed',
  //     }));
  //     isValid = false;
  //   }

  //   // Validation for Email (You can use a more comprehensive email validation regex)
  //   if (!formData.email.includes('@') || !formData.email.includes('.')) {
  //     setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
  //     isValid = false;
  //   }

  //   // Validation for Password
  //   if (
  //     formData.password.length < 8 ||
  //     !/[A-Z]/.test(formData.password) ||
  //     !/[a-z]/.test(formData.password) ||
  //     !/\d/.test(formData.password) ||
  //     !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password)
  //   ) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       password:
  //         'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character',
  //     }));
  //     isValid = false;
  //   }

  //   // Validation for Confirm Password
  //   if (formData.password !== formData.confirmPassword) {
  //     setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
  //     isValid = false;
  //   }

  //   // Validation for Phone
  //   if (formData.phone.trim() === '' || !/^\d{10}$/.test(formData.phone)) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       phone: formData.phone.trim() === '' ? 'Phone Number is required' : 'Phone number must be 10 digits',
  //     }));
  //     isValid = false;
  //   }

  //   return isValid;
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });

    
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    let isValid = true
    // Validation logic for the specific field being edited
    if (name === 'firstName' || name === 'lastName') {
      if (value.trim() === '' || !/^[A-Za-z]+$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required` : `Only alphabets allowed`,
        }));
        isValid= false
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      }
    } else if (name === 'email') {
      if (!value.includes('@') || !value.includes('.')) {
        setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
        isValid= false
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
      }
    } else if (name === 'password') {
      if (
        value.length < 8 ||
        !/[A-Z]/.test(value) ||
        !/[a-z]/.test(value) ||
        !/\d/.test(value) ||
        !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value)

      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password:
            'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character',
        }));
        isValid= false
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
      }
    } else if (name === 'confirmPassword') {
      if (value !== formData.password) {
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
        isValid= false
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
      }
    } else if (name === 'phone') {
      if (value.trim() === '' || !/^\d{10}$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: value.trim() === '' ? 'Phone Number is required' : 'Phone number must be 10 digits',
        }));
        isValid= false
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
      }
    }
  };
  




const handleSubmit = async (e) => {
    e.preventDefault();



    try {

      setLoading(true);

      const response = await signUp(formData,5000);
      const { user, token } = response;

      // Extract _id, email, and other user details from the user object
      const { _id, email, firstName, lastName, phone, password } = user;
  
      localStorage.setItem('_id', _id);
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);
      localStorage.setItem('firstName',firstName)
      localStorage.setItem('lastName', lastName)
      localStorage.setItem('phone',phone)
      localStorage.setItem('password',password)

      console.log('Signup successful!', response);

      window.location.replace(routes.LANDINGPAGE);
    } catch (error) {
      console.log("here")
      setError(error.message);
    } finally {
      console.log("finally ")
      setLoading(false);
    }
  };

  const _id = localStorage.getItem('_id');
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');
  
  console.log(_id);
  console.log(email)
  console.log(token)

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.password.trim() !== '' &&
      formData.confirmPassword.trim() !== '' &&
      !errors.firstName &&
      !errors.lastName &&
      !errors.phone &&
      !errors.password &&
      !errors.confirmPassword
    );
  };

  return (
    <>
    <div className="signup-background">
      <div className="signup-container justify-content-center align-items-center">
        {/* <div className="card p-5"> */}
          {/* <h2 className="text-center mb-4">Sign Up</h2> */}
          {/* {error && <p className="error-msg">{error}</p>} */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              
              />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
          <div className="mb-2">
             <label htmlFor="lastName" className="form-label">Last Name <span className="required">*</span></label>
          <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password <span className="required">*</span></label>
              <div className='password-row'>
              <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                                
                 <i
                  className={` far fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                  id="togglePassword"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>

                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="required">*</span></label>
              <div className='password-row'>
              <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <i
                  className={`far fas ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                  id="toggleConfirmPassword"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number <span className="required">*</span></label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-dark w-100 mt-3" disabled={!isFormValid()}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : null}
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    {/* </div> */}
    </>
  );
};

export default Signup;
