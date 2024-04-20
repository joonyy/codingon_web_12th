/**
 * Buffer란?
 * 1.파일을 읽어들이는 방법 중 하나
 *  Buffering : 파일을 준비하는 과정으로 생각할 수 있음
 * 2.최소한의 데이터를 모아두는 장소
 * 읽는 시간이 길어지면 버퍼링 걸린 것.
 * spinner 등을 통해 버퍼링 중임을 알려주기도 함.
 * 
 * Buffer에 사용되는 메서드
 * 1. alloc(): 빈 버퍼 생성
 * 2. toString(): 버퍼 -> 문자열로 변환
 * 3. from() : 문자열을 버퍼로 변경한다.
 
 */

//파일 모듈을 활용하여 파일을 읽어오고
// const fs = require('fs');
// const data = fs.readFileSync('./demo.txt');
// console.log(data);

//버퍼의 크기를 할당.
// const emptyBuffer = Buffer.alloc(10) //10bite
// console.log(emptyBuffer);

//문자열을 버퍼로 
const strBuffer = Buffer.from('Hello World');
console.log(strBuffer);
console.log(strBuffer.toString());