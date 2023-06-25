import React from "react";
import Header from "../components/header";

function Signin() {
  return(
    <div>
      <Header/>
      <div
        style={{
          height: '65vh',
          // backgroundColor: 'red',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            margin: '0 auto'
          }}
        >
          <img src="img/logocol.svg"/>
          <div>
            <div
              style={{

              }}
            >
              <input
                placeholder="학번"
                type={'text'}
                style={{
                  width: '17em',
                  height: '2.5em',
                  marginTop: '1em',
                }}
              />
            </div>
            <div
              style={{
                
              }}
            >
              <input
                placeholder="비밀번호"
                type={'password'}
                style={{
                  width: '17em',
                  height: '2.5em',
                  marginTop: '.5em',
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: '14.7em',
              height: '2.5em',
              backgroundColor: 'black',
              textAlign: 'center',
              color: 'white',
              marginTop: '.5em',
              borderRadius: '5px',
            }}
          >
            <div
              style={{
                paddingTop: '.7em',
                fontSize: '15px',
              }}
            >
              LOGIN
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '.5em',
            }}
          >
            <div
              style={{
                marginLeft: '1em',
              }}
            >
              회원가입
            </div>
            <div
              style={{
                marginLeft: '6em',
              }}
            >
              탈퇴하기
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Signin;