import React from 'react';

const Welcome = ({ name, wins }) => {
  return (
    <div>
      <h1>Welcome, {name}</h1>
      <h2>Wins: {wins}</h2>
    </div>
  );
};

export default Welcome;
