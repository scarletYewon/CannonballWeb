import React from "react";
import Header from "../components/header";

function Signup() {
  return(
    <div>
      <Header/>
      <div
        style={{
          height: '80vh',
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
                placeholder="email"
                type={'email'}
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
                placeholder="password"
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
            }}
          >
            LOGIN
          </div>
          <div
            style={{
              display: 'flex',
            }}
          >
            <div>
              회원가입
            </div>
            <div>
              탈퇴하기
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Signup;