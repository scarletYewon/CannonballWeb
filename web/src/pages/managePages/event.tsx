import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header";

function Event(){
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
              marginBottom: '1em',
            }}
          >
            <img src="img/upicon.svg"/>
          </div>
          <div>
            <img
              src="img/addaevent.svg"
              style={{
                marginRight: '0.5em',
              }}
            />
            <img
              src="img/management.svg"
              style={{
                marginLeft: '0.5em',
              }}
            />
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '1em'
            }}
          >
            <img src="img/downicon.svg"/>
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '1em'
            }}
          >
            <img src="img/clickthebutton.svg"/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Event;