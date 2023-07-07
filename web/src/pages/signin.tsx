import axios from "axios";
import React, { useRef, useState } from "react";
import Header from "../components/header";

function Signin() {
  
  const [value, setValue] = useState("");

  const onIDChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value)
  };

  const onIDSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  }

  const post = () => {
    axios.post('/cannonball/login',
        {
          classNum : value,
          passWord : 'dfdsfkds',
        }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return(
    <div>
      <Header/>
      <div
        style={{
          height: '88vh',
          display: 'flex',
          alignItems: 'center',
          background: '#f2f2f2',
        }}
      >
        <div
          style={{
            margin: '0 auto'
          }}
        >
          <img src="img/logocol.svg"/>
          <div>
            <form
              onSubmit={onIDSubmit}
            >
              <input
                value={value}
                onChange={onIDChange}
                placeholder="학번"
                type={'text'}
                style={{
                  width: '17em',
                  height: '2.5em',
                  marginTop: '1em',
                }}
              />
            </form>
            <div
              // onSubmit={onPWSubmit}
            >
              <input
                // value={password}
                // onChange={onPWChange}
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