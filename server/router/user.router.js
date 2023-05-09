const express = require('express');
const { userPostController, userUpdateController, userDeleteController } = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.get('/',() => {});

userRouter.post('/',userPostController);

userRouter.post('/update', userUpdateController);

userRouter.post('/delete', userDeleteController)

module.exports = userRouter;