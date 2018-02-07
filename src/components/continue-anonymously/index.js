import React from 'react';

const ContinueAnonymously = ({ history, toggleLandingOK }) => {
  return(
    <button onClick = {() =>{
      toggleLandingOK();
      history.push('/landing');
    }}>
      ContinueAnonymously
    </button>

  );
};

export default ContinueAnonymously;
