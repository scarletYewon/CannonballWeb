import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header";

function Teams(){

  return(
    <div
      style={{
        margin: '0',
        background: '#D3D3D3',
      }}
    >
      <Header/>
      <div
        style={{
          textAlign: 'center',
          marginTop: '4em',
          paddingBottom: '5em',
        }}
      >
        <div>
          <img src="img/icon_team.svg"/>
        </div>
        <div>
          <img src="img/line_appdone.svg"/>
        </div>
        <div
          style={{
            display: 'block',
          }}
        >
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              style={{
                margin: '2em',
              }}
            >
              <img 
                style={{
                  width: '15em',
                }}
              src="img/img_team.svg"/>
              <div
                style={{
                  padding:'2em',
                  fontSize: '1.5em',
                  fontWeight: '800',
                  color:'#636161',
                  background: 'white',
                }}
              >
                Team1
              </div>
            </div>
            <div
              style={{
                margin: '2em',
              }}
            >
              <img 
                style={{
                  width: '15em',
                }}
              src="img/img_team.svg"/>
              <div
                style={{
                  padding:'2em',
                  fontSize: '1.5em',
                  fontWeight: '800',
                  color:'#636161',
                  background: 'white',
                }}
              >
                Team2
              </div>
            </div>
            <div
              style={{
                margin: '2em',
              }}
            >
              <img 
                style={{
                  width: '15em',
                }}
              src="img/img_team.svg"/>
              <div
                style={{
                  padding:'2em',
                  fontSize: '1.5em',
                  fontWeight: '800',
                  color:'#636161',
                  background: 'white',
                }}
              >
                Team3
              </div>
            </div>
          </div>
        </div>

        {/* 한줄더 */}
        <div
          style={{
            // background: 'white',
            display: 'block',
          }}
        >
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              style={{
                margin: '2em',
              }}
            >
              <img 
                style={{
                  width: '15em',
                }}
              src="img/img_team.svg"/>
              <div
                style={{
                  padding:'2em',
                  fontSize: '1.5em',
                  fontWeight: '800',
                  color:'#636161',
                  background: 'white',
                }}
              >
                Team4
              </div>
            </div>
            <div
              style={{
                margin: '2em',
              }}
            >
              <img 
                style={{
                  width: '15em',
                }}
              src="img/img_team.svg"/>
              <div
                style={{
                  padding:'2em',
                  fontSize: '1.5em',
                  fontWeight: '800',
                  color:'#636161',
                  background: 'white',
                }}
              >
                Team5
              </div>
            </div>
            <div
              style={{
                margin: '2em',
              }}
            >
              <img 
                style={{
                  width: '15em',
                }}
              src="img/img_team.svg"/>
              <div
                style={{
                  padding:'2em',
                  fontSize: '1.5em',
                  fontWeight: '800',
                  color:'#636161',
                  background: 'white',
                }}
              >
                Team6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Teams;