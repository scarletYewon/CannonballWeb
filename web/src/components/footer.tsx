import React from "react";

function Footer() {
  return (
    <div
      style={{
        background: '#121212',
        color: 'white',
        marginTop: '5rem',
        paddingTop: '7rem',
        paddingBottom: '2rem',
        paddingLeft: '10rem',
        paddingRight: '10rem',
        fontSize: '.8rem',
        display: 'flex',
      }}
    >
      <div
        style={{
          float:'left',
        }}
      >
        캐논볼(CannonBall, 국민대학교 볼링동아리)<br/>종합복지관 2층 238호<br/>Copyrightⓒ2023.CANNONBALL. All rights reserved.
      </div>
      <div
        id="contact"
        style={{
          width: '10rem',
          float: 'right',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '5rem',
          marginBottom: '1rem',
        }}
      >
        <div>
          캐논볼 채널 바로가기
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
          }}
        >
          <div>
            <img src="img/email.svg"/>
          </div>
          <div>
            <img src="img/instagram.svg"/>
          </div>
          <div>
            <img src="img/youtube.svg"/>
          </div>
          <div>
            <img src="img/kakao.svg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;