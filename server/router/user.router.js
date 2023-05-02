const express = require('express');
const { userPostController } = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.get('/',() => {});

userRouter.post('/',userPostController);

module.exports = userRouter;