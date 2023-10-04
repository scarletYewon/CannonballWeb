import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header";

function AppDone(){
  return(
    <div>
      <Header/>
      <div
        style={{
          height: '88vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '4em',
                fontWeight:'800',
              }}
            >
            신청이
            </div>
            <div
              style={{
                fontSize: '4em',
                fontWeight:'800',
              }}
            >
              완료되었습니다
            </div>
          </div>
          
          <div
            style={{
              textAlign: 'center',
              fontSize: '1em',
              fontWeight: '400',
              marginTop: '3em',
            }}
          >
            조 확인을 원하시면 밑의 버튼을 눌러주세요
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '1.5em',
            }}
          >
            <img src="img/line_appdone.svg"/> 
          </div>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <img src="img/btn_appdone.svg"/> 
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AppDone;