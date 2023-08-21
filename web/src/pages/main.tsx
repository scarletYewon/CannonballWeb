import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { url } from 'inspector';
import axios from 'axios';


function Main() {

  const LoginGet = () => {
    axios.get('http://49.50.172.239:8080/cannonball/login',
      {
        params:{
          classNum : '20213047',
          passWord: 'abcd1234'
        }
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const JoinPost = () => {
    axios.post('http://49.50.172.239:8080/cannonball/join',
      {
        classNum : '20213047',
        passWord: 'abcd1234',
        phoneNum: '010-6415-0121',
        name: '이예원',
        gender: '여',
        className: '소프트웨어학부'
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const ProfileDelete = () => {
    axios.delete('http://49.50.172.239:8080/cannonball/profile',
      {
        data: {
          classNum : '20213047',
        }
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const ProfileGet = () => {
    axios.get('http://49.50.172.239:8080/cannonball/profile',
      {}
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const RandomGroupPut = () => {
    axios.put('http://49.50.172.239:8080/cannonball/random-group',
      {
        randomName: '랜덤조이름',
        boyGirlNum: '12',
        deadLine: '2023-08-20',
        raiseRandom: '2023-09-20',
        inGroupOf: 4,
        startRandom: '2023-10-10',
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const RandomGroupApplicationGet = () => {
    axios.get('http://49.50.172.239:8080/cannonball/random-group-application',
      {
        params:{
          randomName: '랜덤조이름',
        }
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const OrganizationGroupPost = () => {
    axios.post('http://49.50.172.239:8080/cannonball/organization-group',
      {
        randomName: '랜덤번개조',
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const RandomGroupDelete = () => {
    axios.delete('http://49.50.172.239:8080/cannonball/random-group',
      {
        data:{
          randomName: '랜덤조이름',
        }
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const RandomGroupPost = () => {
    axios.post('http://49.50.172.239:8080/cannonball/random-group',
      {
        randomName: '랜덤조이름',
        boyGirlNum: '12',
        deadLine: '2023-08-20',
        raiseRandom: '2023-09-20',
        inGroupOf: 5,
        startRandom: '2023-10-10'
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const RandomGroupGet = () => {
    axios.get('http://49.50.172.239:8080/cannonball/random-group',
      {
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const InformationGroupPut = () => {
    axios.put('http://49.50.172.239:8080/cannonball/information-group',
      {
        randomName: '랜덤조이름',
        classNum: '20213047',
        groupNum: '12'
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const RandomGroupApplicationPost = () => {
    axios.post('http://49.50.172.239:8080/cannonball/random-group-application',
      {
        classNum: '20213047',
        randomName: '랜덤조이름',
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const RandomGroupApplicationDelete = () => {
    axios.delete('http://49.50.172.239:8080/cannonball/random-group-application',
      {
        params:{
          classNum: '20213047',
          randomName: '랜덤조이름',
        }
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const NumberOfApplicantsGet = () => {
    axios.get('http://49.50.172.239:8080/cannonball/number-of-applicants',
      {
        params:{
          randomName: '랜덤조이름',
        }
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const ProfilePut = () => {
    axios.put('http://49.50.172.239:8080/cannonball/profile',
      {
        classNum : '20213047',
        passWord: 'abcd1234',
        phoneNum: '010-6415-0121',
        name: '예원',
        gender: '여',
        className: '소프트웨어학부'
    }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const DateGet = () => {
    axios.get('http://49.50.172.239:8080/cannonball/date',
      {
        params:{
          randomName: '랜덤조이름',
        }
      }
    )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }


  return (
    <div style={{
      display: 'block',
      width: '100%',
      height: '100%',
    }}>
      {/* <div
        style={{
          backgroundImage: "url(/img/background.png)",
          height: '100%',
          // position: 'sticky',
          // top: '0',
        }}
      >
        <Header/>
      </div>
      <Footer/> */}
      <div
        style={{
          
          padding: '10px',
          margin: '10px',
          width: '100px',
          background:'yellow',
        }}
        onClick={LoginGet}
      >
        Login_GET
      </div>
      <div
        style={{
          padding: '10px',
          margin: '10px',
          width: '100px',
          background:'yellow',
        }}
        onClick={JoinPost}
      >
        Join_POST
      </div>
      <div
        style={{
          padding: '10px',
          margin: '10px',
          width: '100px',
          background:'yellow',
        }}
        onClick={ProfileDelete}
      >
        Profile_DELETE
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={ProfileGet}
      >
        Profile_GET
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={RandomGroupPut}
      >
        RandomGroup_PUT
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={RandomGroupApplicationGet}
      >
        RandomGroupApplication_GET
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={OrganizationGroupPost}
      >
        OrganizationGroup_POST
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={RandomGroupDelete}
      >
        RandomGroup_DELETE
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={RandomGroupPost}
      >
        RandomGroup_POST
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={RandomGroupGet}
      >
        RandomGroup_GET
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={InformationGroupPut}
      >
        InformationGroup_PUT
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={RandomGroupApplicationPost}
      >
        RandomGroupApplicaiton_POST
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={RandomGroupApplicationDelete}
      >
        RandomGroupApplicaiton_DELETE
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={NumberOfApplicantsGet}
      >
        NumberOfApplicants_GET
      </div>
      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={ProfilePut}
      >
        Profile_PUT
      </div>

      <div
        style={{
          padding: '10px',
          width: '100px',
          margin: '10px',
          background:'yellow',
        }}
        onClick={DateGet}
      >
        Date_GET
      </div>

    </div>
  );
}

export default Main;
