import React from 'react';

const ContinueAnonymously = ({ history }) => {
  return(
    <button onClick = {() =>{
      history.push('/landing');
    }}>
      ContinueAnonymously
    </button>

  );
};

export default ContinueAnonymously;
