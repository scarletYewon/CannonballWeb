import React from "react";
import Header from "../components/header";

function Group() {
  return(
    <div>
      <Header/>
      <div
        style={{
          display: 'flex',
          height: '88vh',
          width: '100%'
        }}
      >
        <div
          style={{
            background: 'black',
            width: '50%',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              background: 'white',
              position: 'absolute',
              width: '50%',
              height: '70%',
              marginLeft: '10em',
              marginTop: '6.5em',
            }}
          >
            <div
              style={{
                fontSize: '5em',
                fontWeight: '550',
                paddingTop: '2.5em',
              }}
            >
              Group 1
            </div>
          </div>
        </div>
        <div
          style={{
            width: '50%',
            background: '#f2f2f2',
            display: 'flex',
          }}
        >
          <div
            style={{
              background: 'white',
              border: '1px solid #000000',
              textAlign: 'center',
              margin: '0 auto',
              width: '30%',
              height: '50%',
              marginTop: '10em',
            }}
          >
            <div
              style={{
                fontWeight: '700',
                fontSize: '1.2em',
                marginTop: '5em',
              }}
            >
              MEMBER
            </div>
            <div
              style={{
                marginTop: '3em',
              }}
            >
              <div
                style={{
                  fontWeight: '300',
                  marginBottom: '.4em',
                }}
              >
                이예원
              </div>
              <div
                style={{
                  fontWeight: '300',
                  marginBottom: '.4em',
                }}
              >
                이예원
              </div>
              <div
                style={{
                  fontWeight: '300',
                  marginBottom: '.4em',
                }}
              >
                이예원
              </div>
              <div
                style={{
                  fontWeight: '300',
                }}
              >
                이예원
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;