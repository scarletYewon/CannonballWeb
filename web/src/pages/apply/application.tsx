import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header";

function Application(){
  return(
    <div>
      <Header/>
      <div
        style={{
          height: '88vh',
          display: 'flex',
        }}
      >
        <div>
          <img src="img/appimg.svg"/>
        </div>
        <div
          style={{
            margin: '0 auto',
            marginTop: '10em',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '40px',
              fontWeight: '800',
              lineHeight: 'normal',
            }}  
          >
            정기전 신청하기
          </div>
          <div
            style={{
              textAlign: 'center',
              fontFamily: 'Inknut Antiqua',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '800',
              lineHeight: 'normal',
              marginTop: '1em',
            }}
          >
            2023.09.01~2023.09.25
          </div>
          <div
            style={{
              color: '#AAA',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '100px',
              fontStyle: 'italic',
              fontWeight: '800',
              lineHeight: 'normal',
              marginTop: '1em',
            }}
          >
            70명
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '1em',
            }}
          >
            <img src="img/line_appdone.svg"/> 
          </div>
          <div
            style={{
              display: 'flex',
              width: '197px',
              height: '34px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '25px',
              border: '1px solid #121211',
              background: '#FFF',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '15px',
              fontStyle: 'italic',
              fontWeight: '800',
              lineHeight: 'normal',
              marginTop: '3em',
              marginLeft: '2.5em',
            }}
          >
            TO PARTICIPATE
          </div>
        </div>
      </div>
    </div>
  )
}

export default Application;