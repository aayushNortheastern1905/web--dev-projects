// About.js
import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import './aboutStyles.css'

const About = () => {
  const aboutData = [
    { id: 1, title: 'Our Motto', content: 'Our motto is to constantly strive for excellence by fostering a culture of innovation and continuous improvement. We aim to exceed expectations in all endeavors.' },
    { id: 2, title: 'Our Culture', content: 'At our core, we embrace diversity, inclusivity, and teamwork. Our culture promotes collaboration, mutual respect, and an environment where everyone can thrive.' },
    { id: 3, title: 'Our Research', content: 'We are committed to cutting-edge research and development. Our teams engage in groundbreaking projects, pushing the boundaries of knowledge and discovery.' },
    { id: 4, title: 'Our Investors', content: 'We are proud to collaborate with leading global investors who share our vision and support our strategic initiatives, driving us towards sustainable growth and success.' },
    { id: 5, title: 'Our Future Goals', content: 'Our future goals revolve around fostering innovation, expanding our global reach, and making a positive impact. We aim to grow sustainably while leaving a meaningful footprint.' },
  
    // Add more entries as needed
  ];
  

  return (
    <div>
      <Navbar/>
      <h1 className='text-align'>About Us</h1>
      {aboutData.map(item => (
        <Card key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default About;
