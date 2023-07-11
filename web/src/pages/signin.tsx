import axios from "axios";
import React, { useState } from "react";
import Header from "../components/header";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};


function Signin({ onSubmit }: MyFormProps) {
  
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 여기도 모르니까 any 로 하겠습니다.
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: ''
    }); // 초기화
  };

  const AxLogIn = () => {
    // const crossOriginIsolated = {withCredentials: true}
    axios.post('https://cors-anywhere.herokuapp.com/http://49.50.172.239:8080/cannonball/login',
        {
          classNum : name,
          password : description,
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
          <form
            onSubmit={handleSubmit}
          >
            <div>
              <div>
                <input
                  name="name"
                  value={name}
                  onChange={onChange}
                  placeholder="학번"
                  type={'text'}
                  style={{
                    width: '17em',
                    height: '2.5em',
                    marginTop: '1em',
                  }}
                />
              </div>
              <div>
                <input
                  name="description"
                  value={description}
                  onChange={onChange}
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
                // width: '14.7em',
                // height: '2.5em',
                // backgroundColor: 'black',
                // textAlign: 'center',
                // color: 'white',
                marginTop: '.5em',
                borderRadius: '5px',
              }}
            >
              <button
                type="submit"
                style={{
                  width: '14.7em',
                  height: '2.5em',
                  backgroundColor: 'black',
                  textAlign: 'center',
                  color: 'white',
                // marginTop: '.5em',
                  borderRadius: '5px',
                  marginTop: '.7em',
                  fontSize: '15px',
                }}
                onClick={AxLogIn}
              >
                LOGIN
              </button>
            </div>
          </form>
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