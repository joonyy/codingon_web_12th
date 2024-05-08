const express = require('express')
const app = express()

const db=require('./models/index') // 추가

app.set('view engine' ,'ejs')
app.set('views','./views')
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use('/static',express.static(__dirname + '/static'))


const indexRouter = require('./routes')
app.use("/", indexRouter );

const userRouter = require('./routes/user');
app.use('/user' , userRouter)

app.get('*', (req, res) => {
    res.render('404');
})


db.sequelize.sync({force:false}).then( ()=>{
     // force: false => 테이블이 없으면 생성
    app.listen(8000, ()=>{
        console.log("8000 server")
    })
})