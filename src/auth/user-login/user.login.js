const userModal = require("../../user/user.modal");
const { decryptpassword, createToken } = require("../../user/user.service");
const seckretKey = "GaneshBhai";

async function verifyUser(req, res){
    const { email, password } = req.body;
    const getUser = await userModal.findOne({email});
    
    try{
        const decPassword = await decryptpassword(password, getUser.password);
        const token = await createToken(req.body,seckretKey);
    
        if(decPassword){
            res.status(200).json({ Message:"Login successfully..!", token:token});
        } 
        res.status(400).send("Password is not match")

    }catch(error){
        return res.status(404).json({error: error.message, message:"Password is not match"});
    }
}

module.exports = verifyUser;