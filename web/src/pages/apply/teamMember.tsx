import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header";

function TeamMember(){
  return(
    <div>
      <Header/>
      <div
        style={{
          // height: '88vh',
          display: 'flex',
        }}
      >
        <div>
          <div
            style={{
              position: 'absolute',
              color: 'white',
              marginLeft:'17em',
              marginTop: '17em',
            }}
          >
            <div
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: '4em',
                fontStyle: 'italic',
                fontWeight: '800',
              }}  
            >
              Team1
            </div>
          </div>
          <img
            style={{
              width:'50wh'
            }}
            src='img/background_teammember.svg'
          />
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
            }}  
          >
            <img src="img/icon_teammember.svg"/>
            <div
              style={{
                display: 'flex',
                margin: '1em',
              }}
            >
              <div>
                20213047
              </div>
              <div>
                이예원
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember;