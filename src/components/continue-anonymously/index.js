import React from 'react';

const ContinueAnonymously = ({ history, toggleLandingOK }) => {
  return(
    <button onClick = {() =>{
      sessionStorage.removeItem('X-GEO-JUMPER-TOKEN');
      toggleLandingOK();
      history.push('/landing');
    }}>
      Quick Play
    </button>

  );
};

export default ContinueAnonymously;
