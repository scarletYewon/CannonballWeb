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
                placeholder="학번"
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
                placeholder="학과"
                type={'text'}
                style={{
                  width: '17em',
                  height: '2.5em',
                  marginTop: '.5em',
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
                  marginTop: '1em',
                }}
              />
            </div>
            <div
              style={{

              }}
            >
              <input
                placeholder="비밀번호 확인"
                type={'password'}
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
                placeholder="이름"
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
                placeholder="전화번호"
                type={'phone'}
                style={{
                  width: '17em',
                  height: '2.5em',
                  marginTop: '1em',
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
                fontSize: '18px',
              }}
            >
              SIGN UP
            </div>
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '.5em',
              fontSize: '18px',
            }}
          >
            LOGIN
          </div>
        </div>
      </div>
    </div>

  );
}

export default Signup;