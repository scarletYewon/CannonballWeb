import React from "react";
import GroupingList from "../components/groupingList";
import Header from "../components/header";
import MemberList from "../components/memberList";

function Mgrouping() {
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
            어떤 이벤트 이름이올거임
          </div>
          <div
            style={{
              display: 'flex',
            }}
          >
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
              프로그램 실행
            </div>
            <div
              style={{
                color: 'white',
                background: 'black',
                paddingTop: '.9em',
                paddingBottom: '.9em',
                paddingRight: '1.5em',
                paddingLeft: '1.5em',
                borderRadius: '8px',
                marginLeft: '1em',
              }}
            >
              저장하기
            </div>
          </div>
        </div>
        <div
          style={{
          }}
        >
          <GroupingList/>
          <GroupingList/>
          <GroupingList/>
          <GroupingList/>
        </div>
      </div>
    </div>
  );
}

export default Mgrouping;