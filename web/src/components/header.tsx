import React from "react";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate('/signin');
  }
  const goSignUp = () => {
    navigate('/signup');
  }
  const goManager = () => {
    navigate('/manager');
  }
  const goMain = () => {
    navigate('/');
  }
  const goIntro = () => {
    navigate('/introduction')
  }
  const goVision = () => {
    navigate('/vision')
  }
  const goOurAct = () => {
    navigate('/ouractivity')
  }
  const goMore = () => {
    navigate('/more')
  }

  return (
    <div
      style={{
        position: 'sticky',
        top: '0',
        background: 'black',
        height: '100px',
        display: 'flex',
        paddingTop: '5px',
        paddingBottom: '5px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <img
        style={{
          marginLeft: '10px', 
        }}
        src="img/logo_white.svg"
        onClick={goMain}
      />
      <div>
        <div
          style={{
            listStyle: 'none',
            margin: '0',
            padding: '0',
            display: 'flex',
          }}
        >
          <img
            style={{
              flexBasis: '25%',
              marginRight: '60px',
            }}
            src="img/introduction.svg"
            onClick={goIntro}
          />
          <img
            style={{
              flexBasis: '25%',
              marginRight: '60px',
            }}
            src="img/vision.svg"
            onClick={goVision}
          />
          <img
            style={{
              flexBasis: '25%',
              marginRight: '60px',
            }}
            src="img/ourActivity.svg"
            onClick={goOurAct}
          />
          <img
            style={{
              flexBasis: '25%',
              marginRight: '60px',
            }}
            src="img/more.svg"
            onClick={goMore}
          />
        </div>
      </div>

      <div>
        <div
          style={{
            listStyle: 'none',
            marginRight: '50px',
            padding: '0',
            display: 'flex',
          }}
        >
          <img
            style={{
              flexBasis: '25%',
              marginRight: '20px',
            }}
            src="img/login.svg"
            onClick={goSignIn}/>
          <img
            style={{
              flexBasis: '25%',
              marginRight: '20px',
            }}
            src="img/signup.svg"
            onClick={goSignUp}
            />
          <img style={{ flexBasis: '25%', marginRight: '20px', }} src="img/headerLine.svg" />
          <img
            style={{
              flexBasis: '25%',
            }}
            src="img/manager.svg"
            onClick={goManager}
          />
        </div>
      </div>

    </div>

  );
}

export default Header;