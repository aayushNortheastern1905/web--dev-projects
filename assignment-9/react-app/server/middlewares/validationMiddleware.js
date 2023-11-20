const validateEmail = (email) => {

        // Basic email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {

        // Basic password strength validation (at least 8 characters, including at least one uppercase, one lowercase, one number, and one special character)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
  };
  
  const validateFullName = (fullName) => {

        // Allowing only letters and spaces in names
        const fullNameRegex = /^[a-zA-Z\s]+$/;
        return fullNameRegex.test(fullName) && /^[a-zA-Z\s]+$/.test(fullName);
  };
  
  module.exports = {
    validateEmail,
    validatePassword,
    validateFullName,
  };
  