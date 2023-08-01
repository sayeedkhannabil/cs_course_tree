// src/components/Homepage.js
import React from 'react';
import Grid from './Grid';
import { Container } from 'react-bootstrap';

function handleCourses({props}) {
  const buttons = props;

  return (
    <div>
      <Grid items={buttons} />
    </div>
  );
}


const Homepage = () => {
  const year1 = ['Comp 1010', 'Comp 1020', 'Comp 1012' , 'Comp 1500', 'Comp 1600'];
  const year2 = ['Comp 2140', 'Comp 2150', 'Comp 2160', 'Comp 2280', 'Comp 2080'];
  const year3 = ['Comp 3010', 'Comp 3020', 'Comp 3030', 'Comp 3040', 'Comp 3170', 'Comp 3190',
                'Comp 3350', 'Comp 3370', 'Comp 3380', 'Comp 3430', 'Comp 3490', 'Comp 3820'];
  const year4 = ['Comp 4020','Comp 4050', 'Comp 4060', 'Comp 4140', 'Comp 4180',  'Comp 4190',
                'Comp 4300', 'Comp 4350', 'Comp 4360', 'Comp 4380', 'Comp 4420', 'Comp 4430', 
                'Comp 4490', 'Comp 4510', 'Comp 4522', 'Comp 4550', 'Comp 4560', 'Comp 4580', 
                'Comp 4620', 'Comp 4710', 'Comp 4820'];
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Container>
        {handleCourses({props:year1})}
        {handleCourses({props:year2})}
        {handleCourses({props:year3})}
        {handleCourses({props:year4})}
      </Container>
    </div>
  );
};

export default Homepage;
