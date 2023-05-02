const { model } = require('mongoose');
const userSchema = require('../schema/user.schema');

const userModel = model('users',userSchema);


module.exports = userModel;