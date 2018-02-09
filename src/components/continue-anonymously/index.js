import './_continue-anonymously.scss';
import React from 'react';

const ContinueAnonymously = ({ history, toggleLandingOK }) => {
  return(
    <button id='quick-play' onClick = {() =>{
      sessionStorage.removeItem('X-GEO-JUMPER-TOKEN');
      toggleLandingOK();
      history.push('/landing');
    }}>
      Quick Play
    </button>

  );
};

export default ContinueAnonymously;
