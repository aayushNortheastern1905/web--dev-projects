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

