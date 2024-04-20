/**
 * 1.crypto는 단방향 암호화 구현
 * createHash() : 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화방식
 *password를 sha512 알고리즘 방식으로 암호화하고,
 *base 방식으로 return 하는 함수.
*/
const crypto = require('crypto');
const createHashedPW = (password) =>{
  return crypto.createHash('sha512').update(password).digest('base64')
}

console.log(createHashedPW('1234'));
console.log(createHashedPW('1234'));
console.log(createHashedPW('5678'));