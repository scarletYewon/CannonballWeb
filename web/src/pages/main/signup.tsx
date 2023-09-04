import axios from "axios";
import React, { useState } from "react";
import Header from "../components/header";

// type MyFormProps = {
//   onSubmit: (form: { classNum: string; description: string }) => void;
// };

function Signup() {
  // const [form, setForm] = useState({
  //   name: '',
  //   description: '',
  // });

  // const { name, description } = form;

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   // 여기도 모르니까 any 로 하겠습니다.
  //   e.preventDefault();
  //   onSubmit(form);
  //   setForm({
  //     name: '',
  //     description: '',
  //   }); // 초기화
  // };

  return(
    <div>
      <Header/>
      <div
        style={{
          height: '88vh',
          // backgroundColor: 'red',
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
                placeholder="학과"
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