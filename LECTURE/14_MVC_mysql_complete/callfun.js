//callback의 원리 및 작동방법
console.log('Before');
getUser(1,function(user){
  console.log("User Id: ",user.id);
  console.log("gitHubUsername: ",user.gitHubUsername);
  });

function getUser(id, abc){
  setTimeout(()=>{
    console.log('Reading Database...')
    abc({id:id, gitHubUsername:'hong'});
    console.log('after');
  },2000)
}

