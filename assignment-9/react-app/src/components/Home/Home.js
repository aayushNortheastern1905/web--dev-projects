// Home.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import './homeStyles.css'

const Home = () => {
  const additionalInfo = [
    { id: 1, title: 'Struggling to find an internship/full-time position?', content: 'Our platform connects you with numerous companies seeking candidates just like you. Get access to a wide range of internship and job opportunities.' },
    { id: 2, title: 'Give our skill recognition test', content: 'Take our assessment to showcase your skills to potential employers. Highlight your strengths and stand out from the crowd.' },
    { id: 3, title: 'Personalized attention', content: 'We provide personalized guidance and support throughout your job search journey. Our team assists you in tailoring your applications and improving your chances of success.' },
    { id: 4, title: 'Money-back guarantee!', content: 'We believe in our services. If you don’t find value in our platform within a specified period, we offer a money-back guarantee, no questions asked.' },

  ];
  


  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      {additionalInfo.map(item => (
        <Card key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Home;
