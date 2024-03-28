/*async await 사용
console.log('before');

async function displayCommits(){
  const user = await getUser(1);
  const repos = await getRepo(user.gitHubUserName);
  const commit = await getCommits(repos[0]);
  console.log(commit);
};
displayCommits();

console.log('after');
*/

console.log('before');

async function displayCommits(){
  try{
    const user = await getUser(1);
    const repos = await getRepo(user.gitHubUserName);
    const commit = await getCommits(repos[0]);
    console.log(commit);
  }catch(err){
    console.log('에러가 났어요 : ',err.message);
  }
};
displayCommits();

console.log('after');



function getUser(id){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log('Reading user from DATABASE');
      res({id:id, gitHubUserName:'hong'})
    },1000)
  })
}

function getRepo(username){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log('gitHub API...');
      rej(['repo1','repo2','repo3'])
    },1000)
  })
}

function getCommits(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log('Commits');
      res(['commit'])
    },1000)
  })
}