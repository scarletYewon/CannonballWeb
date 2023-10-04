import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/header";

function AddEvent(){

  const navigate = useNavigate();

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
          }}
        >
          <div>
            <img src="img/icon_eventsetting.svg"/>
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '2em',
            }}
          >
            <div
              style={{
                marginBottom: '1em',
              }}
            >
              <div
                style={{
                  marginBottom: '.5em',
                }}
              >
                EventName
              </div>
              <div>
                <input
                  name="eventName"
                  placeholder="이벤트이름"
                  type={'text'}
                  style={{
                    width: '17em',
                    height: '2.5em',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                marginBottom: '1em',
              }}
            >
              <div
                style={{
                  marginBottom: '.5em',
                }}
              >
                numberOfPeople
              </div>
              <div>
                <input
                  name="numberOfPeople"
                  placeholder="몇명?"
                  type={'text'}
                  style={{
                    width: '17em',
                    height: '2.5em',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                marginBottom: '1em',
              }}
            >
              <div
                style={{
                  marginBottom: '.5em',
                }}
              >
                GroupOfPeople
              </div>
              <div>
                <input
                  name="groupOfPeople"
                  placeholder="몇명?"
                  type={'text'}
                  style={{
                    width: '17em',
                    height: '2.5em',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                marginBottom: '1em',
              }}
            >
              <div
                style={{
                  marginBottom: '.5em',
                }}
              >
                startDate
              </div>
              <div>
                <input
                  name="startDate"
                  type={'date'}
                  style={{
                    width: '17em',
                    height: '2.5em',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                marginBottom: '1em',
              }}
            >
              <div
                style={{
                  marginBottom: '.5em',
                }}
              >
                endDate
              </div>
              <div>
                <input
                  name="endDate"
                  type={'date'}
                  style={{
                    width: '17em',
                    height: '2.5em',
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              textAlign:'center',
              marginTop: '2em',
            }}
          >
            <img src="img/btn_createevent.svg"/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AddEvent;