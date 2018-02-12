import React from 'react';

const Welcome = ({ name }) => {
  const user = name ? name : 'Anonymous';
  return (
    <div>
      <h1>Welcome, {user}!</h1>
    </div>
  );
};

export default Welcome;
