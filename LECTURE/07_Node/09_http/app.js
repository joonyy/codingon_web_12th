const http_ex = require('http')

//console.log(http_ex)
const server = http_ex.createServer()
server.listen(8000)
console.log('8000포트가 열렸습니다.')

//주소 : http://127.0.0.1:3000/ 
//127.0.0.1 == localhost