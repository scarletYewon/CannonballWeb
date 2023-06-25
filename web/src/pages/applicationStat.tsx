import React from "react";
import Header from "../components/header";

function ApplicationStat() {
  return(
    <div>
      <Header/>
      <div
        style={{
          background: '#f2f2f2',
          height: '88vh',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '2.5em',
                fontWeight: '700',
                marginBottom: '.3em',
              }}
            >
              정기전 신청현황
            </div>
            <div>
              신청기간: 2023.04.22 ~ 2023.05.06
            </div>
          </div>
          <div
            style={{
              fontWeight: '1000',
              fontSize: '8em',
              marginTop: '.7em',
              marginBottom: '.4em',
            }}
          >
            30
          </div>
          <div
            style={{
              display:'inline',
              color: 'white',
              background: 'black',
              paddingTop: '.9em',
              paddingBottom: '.9em',
              paddingRight: '5em',
              paddingLeft: '5em',
              borderRadius: '8px',
            }}
          >
            나도 신청하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationStat;