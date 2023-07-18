import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function GroupingList() {

  const EventMemberDelete = () => {
    axios.delete('http://49.50.172.239:8080/cannonball/withdrawRandom',
        {
          data: { // 서버에서 req.body.{} 로 확인할 수 있다.
            classNum:'20212976' ,
            randomName: '랜덤번개조',
          },
          withCredentials: true,
        },
        // crossOriginIsolated
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

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
        소프트웨어학부
      </div>
      <div
        style={{
          paddingTop: '1em',
        }}
      >
        1조
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
          onClick={EventMemberDelete}
        >
          삭제
        </div>
      </div>
    </div>
  );
}

export default GroupingList;