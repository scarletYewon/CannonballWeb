import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/header";

function ManagementMain(){
  const navigate = useNavigate();

  const goMember = () => {
    navigate('/managermember')
  }
  const goEvent = () => {
    navigate('/managerevent')
  }

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
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img 
            style={{
              marginRight: '3em',
            }}
            src="img/icon_member.svg"
            onClick={goMember}
          />
          <img src="img/icon_bar.svg"/>
          <img
            style={{
              marginLeft: '3em',
            }}
            src="img/icon_event.svg"
            onClick={goEvent}
          />
        </div>
      </div>
    </div>
  );
}
export default ManagementMain;