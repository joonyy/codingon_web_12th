console.log('Before');
getUser(1, function(user){
  console.log('User', user);
});
console.log('After');

function getUser(id,abc){ //abc가 콜백함수이다!
  setTimeout(()=>{
    console.log('Reading data...');
    abc({id:id, gitHubUsername:'hong'})
  }, 2000);
}

