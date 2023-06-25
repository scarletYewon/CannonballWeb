import React from "react";
import { useNavigate } from 'react-router-dom';

function Grid() {
  const navigate = useNavigate();

  const goApply = () => {
    navigate('/applicationStat');
  }

  const goMApply = () => {
    navigate('/Mapplicationstat');
  }

  return (
    <div
      id="grid"
      style={{
        height: '23rem',
        background: '#F2F2F2',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        id="goLeft"
        style={{
          marginRight: '3rem',
          marginTop: '10rem',
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
            border: '1px solid #121212',
            borderRadius: '8px',
            display: 'inline-block',
            textAlign: 'center',
            verticalAlign: 'middle',
            backgroundImage: 'url("img/viewbackground1.svg")'
          }}
          onClick={goApply}
        >
          <div
            id="v1date"
            style={{
              marginTop: '4rem',
              fontSize: '1.5em',
              fontWeight: '600',
            }}
          >
            04.25.SAT
          </div>
          <div
            id="v1name"
            style={{
              marginTop: '1rem',
              fontSize: '1.5em',
              fontWeight: '600',
            }}
          >
            캐논볼<br/>제 25회 정기전<br/>참가신청
          </div>
          <div
            id="v1join"
            style={{
              width: '8rem',
              height: '1rem',
              margin: '3rem auto',
              fontSize: '.8em',
              fontWeight: '400',
              textAlign: 'center',
              padding: '.5rem 1rem',
              color: 'white',
              border: '1px solid #121212',
              borderRadius: '4px',
              background: 'rgb(0,0,0,0.8)',

            }}
          >
            바로 신청하기 {'>'}
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
            borderRadius: '8px',
            display: 'inline-block',
            textAlign: 'center',
            verticalAlign: 'middle',
            backgroundImage: 'url("img/viewbackground2.svg")'
          }}
          onClick={goMApply}
        >
          <div
            id="v2date"
            style={{
              marginTop: '4rem',
              fontSize: '1.5em',
              fontWeight: '600',
            }}
          >
            05.25.THU
          </div>
          <div
            id="v2name"
            style={{
              marginTop: '1rem',
              fontSize: '1.5em',
              fontWeight: '600',
            }}
          >
            캐논볼<br/>번개조<br/>참가신청
          </div>
          <div
            id="v2join"
            style={{
              width: '8rem',
              height: '1rem',
              margin: '3rem auto',
              fontSize: '.8em',
              fontWeight: '400',
              textAlign: 'center',
              padding: '.5rem 1rem',
              color: 'white',
              border: '1px solid #000000',
              borderRadius: '4px',
              background: 'rgb(0,0,0,0.8)',

            }}
          >
            바로 신청하기 {'>'}
          </div>
        </div>
        
      </div>
      <div
        id="goRight"
        style={{
          marginLeft: '3rem',
          marginTop: '10rem',
        }}
      >
        <img src="img/goright.svg"/>
      </div>
    </div>
  );
}

export default Grid;