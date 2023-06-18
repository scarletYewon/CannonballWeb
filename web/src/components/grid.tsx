import React from "react";

function Grid() {
  return (
    <div
      id="grid"
      style={{
        display: 'inline-block',
        width: '100%',
        height: '20rem',
        justifyContent: 'center',
      }}
    >
      <div
        id="goLeft"
        style={{
          
        }}
      >
        <img src="img/goleft.svg"/>
      </div>
      <div
        id="viewContainer"
        style={{
          display: 'flex',
        }}
      >
        <div
          id="view1"
          style={{
            margin: '1rem',
            width: '20rem',
            height: '20rem',
            color: 'black',
            border: '1px solid #000000',
            textAlign: 'center',
          }}
        >
          <div
            id="v1date"
          >
            04.25.SAT
          </div>
          <div
            id="v1name"
            style={{
              width: '10rem',
            }}
          >
            캐논볼 제 25회 정기전 참가신청
          </div>
          <div
            id="v1join"
          >
            바로 신청하기
          </div>
        </div>
        <div
          id="view2"
          style={{
            margin: '1rem',
            width: '20rem',
            height: '20rem',
            color: 'black',
            border: '1px solid #000000',
            textAlign: 'center',
          }}
        >
          <div
            id="v2date"
          >
            05.05.MON
          </div>
          <div
            id="v2name"
          >
            캐논볼 번개조 참가신청
          </div>
          <div
            id="v2join"
          >
            바로 신청하기
          </div>
        </div>
      </div>
      <div
        id="goRight"
        style={{
          
        }}
      >
        <img src="img/goright.svg"/>
      </div>
    </div>
  );
}

export default Grid;