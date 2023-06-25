import React from "react";
import { useNavigate } from 'react-router-dom';

function GroupCard() {
  const navigate = useNavigate();

  const goGroup = () => {
    navigate('/group');
  }
  
  return (
    <div
      style={{
        margin:'.7em',
        background: 'white',
      }}
      onClick={goGroup}
    >
      <img src="img/groupimg.svg"/>
      <div
        style={{
          margin: '1em',
        }}
      >
        <div
          style={{
            fontSize: '1.2em',
          }}
        >
          1조
        </div>
        <div
          style={{
            marginTop: '3em',
          }}
        >
          See More{'>'}
        </div>
      </div>
    </div>
  );
}

export default GroupCard;