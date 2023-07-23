// src/components/Homepage.js
import React from 'react';
import Grid from './Grid';

const Homepage = () => {
  const buttons = ['Comp 1010', 'Comp 1020', 'Comp 1012' , 'Comp 1500', 'Comp 1600'];

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <div>
        <Grid items={buttons} />
      </div>
    </div>
  );
};

export default Homepage;
