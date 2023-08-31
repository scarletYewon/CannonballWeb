
function Api() {

  return (
    <div>
      hello
    </div>
  );
}
// const LoginGet = () => {
//   axios.get('http://49.50.172.239:8080/cannonball/login',
//     {
//       params:{
//         classNum : '20213047',
//         passWord: 'abcd1234'
//       }
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const JoinPost = () => {
//   axios.post('http://49.50.172.239:8080/cannonball/join',
//     {
//       classNum : '20213047',
//       passWord: 'abcd1234',
//       phoneNum: '010-6415-0121',
//       name: '이예원',
//       gender: '여',
//       className: '소프트웨어학부'
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const ProfileDelete = () => {
//   axios.delete('http://49.50.172.239:8080/cannonball/profile',
//     {
//       data: {
//         classNum : '20213047',
//       }
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const ProfileGet = () => {
//   axios.get('http://49.50.172.239:8080/cannonball/profile',
//     {}
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const RandomGroupPut = () => {
//   axios.put('http://49.50.172.239:8080/cannonball/random-group',
//     {
//       randomName: '랜덤조이름',
//       boyGirlNum: '12',
//       deadLine: '2023-08-20',
//       raiseRandom: '2023-09-20',
//       inGroupOf: 4,
//       startRandom: '2023-10-10',
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const RandomGroupApplicationGet = () => {
//   axios.get('http://49.50.172.239:8080/cannonball/random-group-application',
//     {
//       params:{
//         randomName: '랜덤조이름',
//       }
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const OrganizationGroupPost = () => {
//   axios.post('http://49.50.172.239:8080/cannonball/organization-group',
//     {
//       randomName: '랜덤조이름',
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const RandomGroupDelete = () => {
//   axios.delete('http://49.50.172.239:8080/cannonball/random-group',
//     {
//       data:{
//         randomName: '랜덤조이름',
//       }
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const RandomGroupPost = () => {
//   axios.post('http://49.50.172.239:8080/cannonball/random-group',
//     {
//       randomName: '랜덤조이름',
//       boyGirlNum: '12',
//       deadLine: '2023-08-20',
//       raiseRandom: '2023-09-20',
//       inGroupOf: 5,
//       startRandom: '2023-10-10'
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const RandomGroupGet = () => {
//   axios.get('http://49.50.172.239:8080/cannonball/random-group',
//     {
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const RandomGroupApplicaitonPut = () => {
//   axios.put('http://49.50.172.239:8080/cannonball/random-group-application',
//     {
//       randomName: '랜덤조이름',
//       classNum: '20213047',
//       groupNum: '12'
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const RandomGroupApplicationPost = () => {
//   axios.post('http://49.50.172.239:8080/cannonball/random-group-application',
//     {
//       classNum: '20213047',
//       randomName: '랜덤조이름',
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const RandomGroupApplicationDelete = () => {
//   axios.delete('http://49.50.172.239:8080/cannonball/random-group-application',
//     {
//       params:{
//         classNum: '20213047',
//         randomName: '랜덤조이름',
//       }
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const NumberOfApplicantsGet = () => {
//   axios.get('http://49.50.172.239:8080/cannonball/number-of-applicants',
//     {
//       params:{
//         randomName: '랜덤조이름',
//       }
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const ProfilePut = () => {
//   axios.put('http://49.50.172.239:8080/cannonball/profile',
//     {
//       classNum : '20213047',
//       passWord: 'abcd1234',
//       phoneNum: '010-6415-0121',
//       name: '예원',
//       gender: '여',
//       className: '소프트웨어학부'
//   }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }

// const DateGet = () => {
//   axios.get('http://49.50.172.239:8080/cannonball/date',
//     {
//       params:{
//         randomName: '랜덤조이름',
//       }
//     }
//   )
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }




// 화면이동
// const navigate = useNavigate();

//   const goAppDone = () => {
//     navigate('/applicationstatdone');
//   }