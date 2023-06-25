import React from "react";

function GroupCard() {
  return (
    <div
      style={{
        margin:'.7em',
        background: 'white',
      }}
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