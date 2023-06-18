import React from "react";

function Header() {
  return (
    <div
        id='header'
        style={{
          position: 'sticky',
          top: 0,
          width: '15rem',
          height: '3rem',
          padding: '.5rem',
          display: 'inline',
          justifyContent: 'center',
          alignItems: 'center',
        }}
    >
      <img
        id='logo'
        style={{
          width: '15rem',
          height: '3rem',
        }}
        src='img/logo.svg'/>
      <div
        id='itemBox'
        style={{
          height: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          float: 'right',
        }}
      >
        <div
          id='item1'
          style={{
            width: '5rem',
            display: 'block',
            textAlign: 'center',
            margin: '.25rem',
            padding: '.5rem 1rem',
            color: 'black',
            border: '1px solid #000000',
            borderRadius: '4px',
            background: 'white',
          }}
        >
          Sign In
        </div>
        <div
          id='item2'
          style={{
            width: '5rem',
            display: 'block',
            textAlign: 'center',
            margin: '.25rem',
            padding: '.5rem 1rem',
            color: 'white',
            border: '1px solid #000000',
            borderRadius: '4px',
            background: 'black',
          }}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default Header;