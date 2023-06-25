import React from "react";
import Header from "../components/header";
import MemberList from "../components/memberList";

function Mmember() {
  return(
    <div>
      <Header/>
      <div
        style={{
          background: '#f2f2f2',
          height: '88vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '75vw',
            margin: '0 auto',
            paddingTop: '2em',
            paddingBottom: '1.5em',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              fontSize: '2.5em',
              marginLeft: '1em',
              paddingTop: '.1em',
              fontWeight: '800',
            }}
          >
            회원관리
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
          + 회원 추가하기
        </div>
      </div>
        </div>
        <div
          style={{
          }}
        >
          <MemberList/>
          <MemberList/>
          <MemberList/>
          <MemberList/>
        </div>
      </div>
    </div>
  );
}

export default Mmember;