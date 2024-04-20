/**
 * bcrypt
 * :비밀번호 암호화 알고리즘 중 하나
 * :주로 강력한 보안이 필요할 때 사용
 * :blowfish 기반으로 설계된 단방향 암호화 함수
 */

const bcrypt = require ('bcrypt');
const originalPW = '1234';//원본 비밀번호
const saltRounds = 10;//salt 라운드수

//비밀번호 해싱 함수
function hashPW(password){
return bcrypt.hashSync(password, saltRounds);
}
function comparePW(password, hashedPW){
return bcrypt.compareSync(password, hashedPW)
}

const hashedPW = hashPW(originalPW)
console.log(`해시된 PW, ${hashedPW}`)

const isMatch = comparePW(originalPW,hashedPW)
console.log(`originalPW === hashedPW, ${isMatch}`);

const isMatch2 = comparePW('5678',hashedPW)
console.log(`5678 === hashedPW, ${isMatch2}`);