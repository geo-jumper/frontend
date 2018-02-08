import React from 'react';

const Welcome = ({ name, wins }) => {
  const user = name ? name : 'Anonymous';
  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <h2>Wins: {wins}</h2>
    </div>
  );
};

export default Welcome;
