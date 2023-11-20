// Contact.js
import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';

const Jobs = () => {
    const jobsdata = [
        { id: 1, title: 'Software Engineer', content: 'Developing scalable web applications using modern technologies.' },
        { id: 2, title: 'Marketing Specialist', content: 'Creating marketing campaigns and analyzing market trends.' },
        { id: 3, title: 'Customer Support Representative', content: 'Providing excellent customer service and resolving issues.' },
        { id: 4, title: 'Data Analyst', content: 'Analyzing complex data sets to derive actionable insights.' },
      ];
      

  return (
    <div>
    <Navbar/>
      <h1>Vacancies</h1>

      {jobsdata.map(item => (
        <Card key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Jobs;

