import React from "react";

function Introduce() {
  return (
    <div>
      <div
        style={{
          background: 'black',
          fontSize: '3rem',
          fontWeight: '700',
          color: 'white',
          textAlign: 'left',
          paddingLeft: '10rem',
          padding: '5rem',

        }}
      >
        Since 1983<br/>국민대 유일 볼링동아리 캐논볼
      </div>
      <div>
        <img
          style={{
            width: '100%'
          }}
          src="img/intro1.png"/>
          <img
          style={{
            width: '100%'
          }}
          src="img/intro2.png"/>
      </div>
    </div>
  );
}

export default Introduce;