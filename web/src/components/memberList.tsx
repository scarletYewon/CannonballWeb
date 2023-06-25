import React from "react";
import { useNavigate } from 'react-router-dom'

function MemberList() {

  return (
    <div
      style={{
        background: 'white',
        display: 'flex',
        width: '68vw',
        height: '3em',
        margin: '0 auto',
        marginBottom: '1em',
        justifyContent: 'space-between',
        paddingLeft: '5em',
        paddingRight: '5em',
      }}
    >
      <div
        style={{
          paddingTop: '1em',
        }}
      >
        이예원
      </div>
      <div
        style={{
          paddingTop: '1em',
        }}
      >
        20213047
      </div>
      <div
        style={{
          paddingTop: '1em',
        }}
      >
        password
      </div>
      <div
        style={{
          paddingTop: '1em',
        }}
      >
        010-6415-0121
      </div>
      <div>
        <div
          style={{
            color: 'white',
            background: 'black',
            paddingTop: '.9em',
            paddingBottom: '.9em',
            paddingRight: '1.5em',
            paddingLeft: '1.5em',
            borderRadius: '8px',
          }}
        >
          삭제
        </div>
      </div>
    </div>
  );
}

export default MemberList;