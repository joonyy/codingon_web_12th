const crypto = require('crypto');
/**
 * pbkdfSync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
 * 비밀번호 기반 키도출함수이다. 주로 비밀번호 저장 시 사용한다.
 * buffer 형식의 데이터를 반환하며, toString()을 통해 문자열로 변환해야 한다.
 * 
 * 1. 단방향 암호화 생성함수
 * 2. 임의의 솔트값 생성
 * 3. 해당 솔트와 제공된 비밀번호 기반으로 해시 생성
 * 4. 생성된 해시와 솔트 반환
 */

function saltAndHashPW(password){
  const salt = crypto.randomBytes(16).toString('base64'); //임의의 salt 생성
  const iteration = 100; //해시 함수를 반복할 횟수
  const keylen = 64;//키의 길이
  const algorithm ='sha512';
  
  const hash = crypto.pbkdf2Sync(password, salt, iteration, keylen, algorithm).toString('base64');
  return {salt,hash};
}
const password = '1234';

const {salt,hash} = saltAndHashPW(password);
// console.log(`비밀번호 암호화에 쓰인 salt :${salt} 암호화된 hash : ${hash} `)

//암호비교 함수
/**
 * inputPW = 제공된 비밀번호, salt, hash를 기반으로 새로운 해시를 생성
 * 새로운 해시와 저장된 savedHash를 비교함.
 * 제공된 비밀번호와 저장된 비밀번호가 같으면 해시값도 일치한다.
 */
function checkPW(inputPW, savedSalt, savedHash){
  const iteration = 100; // 해시 함수를 반복할 횟수
  const keylen = 64; // 생성할 키의 길이
  const algorithm = 'sha512';
  const hash = crypto.pbkdf2Sync(inputPW,savedSalt,iteration,keylen,algorithm).toString('base64');

  return savedHash === hash;
}
//비밀번호 검증
const inputPW = '1234';
const isMatch =  checkPW(inputPW, salt,hash);

console.log(`비밀번호 일치 여부 : ${isMatch}`); 