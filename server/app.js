const cors = require('cors');
const express = require('express');

const userRouter = require('./router/user.router');


const app = express();

app.use(cors({
    origin : "http://localhost:3000"
}))
app.use(express.json());

// routers
app.use('/user',userRouter)


module.exports = app;

