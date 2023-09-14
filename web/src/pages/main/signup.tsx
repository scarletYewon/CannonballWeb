import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header";

function Signup() {

  return(
    <div>
      <Header/>
      <div
        style={{
          height: '88vh',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            margin: '0 auto'
          }}
        >
          <img
            style={{
              display: 'inline-block',
              alignItems: 'center',
            }}
            src="img/icon_signup.svg"
          />
          <div>
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
                  marginTop: '.5em',
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
                placeholder="학번"
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
                  marginTop: '.5em',
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
                  marginTop: '.5em',
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: '15em',
              height: '2.5em',
              backgroundColor: 'black',
              color: 'white',
              marginLeft: '2em',
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
          <img src="img/icon_privacy.svg"/>
        </div>
      </div>
    </div>

  );
}

export default Signup;