const crypto = require('crypto');
const password = '1234';
const salt = crypto.randomBytes(128).toString('base64');

const hashPassword = crypto
.createHash('sha512')//해시 알고리즘 종류
.update(password+salt)//변환할 문자
.digest('base64');//인코딩 알고리즘

console.log(hashPassword)