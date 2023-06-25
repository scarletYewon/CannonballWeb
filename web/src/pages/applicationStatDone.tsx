import React from "react";
import GroupCard from "../components/groupcard";
import Header from "../components/header";

function ApplicationStatDone() {
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
              display: 'flex',
              marginTop: '4em',
            }}
          >
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationStatDone;