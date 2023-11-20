
# Assignment 9 (React.js)

In this assignment I have built a simple Job Hunt react application. This application has a login page where user can enter the application by entering valid email id and password. 

The application has five pages and two components which are reused in order to avoid repeatition.

This application is connected to the backend application(APIs) made during last assignment. 

## Logging Action

So for logging in, user needs to enter a valid email and password. Once the login button is clicked the get api call is made in the back and the response is fetched and now I traverse through that array and check of the user with that email exists. If it does then only will the user be logged in.

## Front End
Once logged in user can see a navbar which is a reusable component. 
Navbar has 4 routes 
1) Home
2) About
3) Contact
4) Jobs
All 4 routes are accessible by using react-router-dom. 

## Card component

Now Card component is a dynamic component which is used on each page accept for login.js .
User just has to pass the title and content as props and use react-map to render it dynamically.


## Styling
I have kept the styles very basic and uniformed in order to make the site presentable.


// Contact.js
import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
  const contactData = [
    { id: 1, title: 'Email Contact', content: 'Hirect@yahoo.co.in' },
    { id: 2, title: 'Mobile Contact', content: '+1 234 456 6789' },
    { id: 3, title: 'Office Address', content: '90 Bynner Avenue Opposite to VA Hospital Boston, MA' },
    { id: 2, title: 'Office Hours', content: 'Monday to Friday 9AM to 6PM' },
    // Add more data as needed
  ];

  return (
    <div>
              <Navbar/>
      <h1>Contact</h1>

      {contactData.map(item => (
        <Card key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Contact;

