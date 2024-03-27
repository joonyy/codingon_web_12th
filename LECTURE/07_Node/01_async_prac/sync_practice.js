const fs = require('fs');
const data1= fs.readFileSync('file1.txt', 'utf-8');
console.log(data1);
const data2= fs.readFileSync('file2.txt', 'utf-8');
console.log(data2);
const data3= fs.readFileSync('file3.txt', 'utf-8');
console.log(data3);