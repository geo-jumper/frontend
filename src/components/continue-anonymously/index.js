import React from 'react';

const ContinueAnonymously = ({ history, toggleLandingOK }) => {
  return(
    <button onClick = {() =>{
      sessionStorage.removeItem('X-GEO-JUMPER-TOKEN');
      toggleLandingOK();
      history.push('/landing');
    }}>
      ContinueAnonymously
    </button>

  );
};

export default ContinueAnonymously;
