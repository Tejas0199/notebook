const userModel = require("../modal/collections/user.collection");

const userPostController = async (req,res) => {
    const user = req.body;
    console.log(user);
    // validate(user)
    try {
        const data = await userModel.findOne({ phoneNumber : user.phoneNumber }).exec();
        if(data) {
            console.log("hello")
            res.status(400).send({ msg : "already you have account"});
        } else {
        const userDB = await userModel.create(user);
        res.status(201).send({ msg : "data stored in db", data : userDB});
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg : "something went wrong please try again later"})
    }
}

const userUpdateController = async (req,res) => {
    const user = req.body;
    const id = user._id;
    const data = await userModel.findOne({ _id : id});
    if(! data) {
        res.status(400).send({ msg : "data not present in db"});
        return ;
    }
    await userModel.updateOne({ occupation : "student" },{...user});
    res.send({ msg : "updated"})
}

const userDeleteController = async (req,res) => {
    const id = req.body.userId;
    console.log(id);
    const data = await userModel.findOne({ _id : id});
    if(! data) {
        res.status(400).send({ msg : "data not present in db"});
        return ;
    }
    await userModel.deleteOne({ _id : id })
    res.send({ msg : "data deleted"})

}
module.exports = {
    userPostController,
    userUpdateController,
    userDeleteController
}