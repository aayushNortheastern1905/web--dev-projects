import React from 'react';
import './ProfileStyles/profileStyles.css'; // Import the external CSS file
import routes from '../../Routes';
import Navigation from '../Navigation/Navigation';


function Profile() {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('phone');


  const handleEditClick = ()=> {
    window.location.href = routes.UPDATE_USER
  }


  return (
    <div>
      <Navigation />
      <div className="header">
        <h2 className='welcome'>Welcome <span className='name-header'>{firstName}</span>!</h2>
      </div>
      <div className="container">
        <div className="profile-card">
          <div className="profile-header">
            <h2 className="profile-title">Profile Information</h2>
            <button className="edit-button"  onClick={handleEditClick}>Edit</button>
          </div>
          <div className="profile-details">
            <p><strong>First Name:</strong> {firstName} </p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

