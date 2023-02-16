const express = require('express')
const app = express()
const cors = require('cors')
const passportSetup = require('./passport')
const passport = require('passport')
const cookieSession = require('cookie-session');
const authRoute = require("./routes/auth")
const { Router } = require('express')

app.use(
    cookieSession({name:'session' , keys:['sahil'],maxAge:24*60*60*100})
)

app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials:true,
})
)
app.use("/auth",authRoute);
app.listen('5000',()=>{
    console.log('sever is running!')
})
module.exports=router