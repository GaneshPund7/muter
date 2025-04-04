const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createToken(payload, seckretKey) {    
   let token = jwt.sign(payload, seckretKey, { expiresIn: '300' });
    return token;
}
async function verifyToken() {
    

}

async function encryptPassword(password) {
    try {
        const comSalt = 10;
        const encryptPassword = await bcrypt.hash(password, comSalt);
        return encryptPassword
    } catch (error) {
        return res.status(400).send("Somthing went wrong..!")
    }

}

async function decryptpassword(password, encPassword) {
    try {
        const comaprepass = bcrypt.compare(password, encPassword);
        return comaprepass;
    } catch (error) {
        return res.status(404).send("Somthing went wrong..!")
    }
}
async function forgetpassword() {

}

async function checkAge(req, res, next) {

    const { age } = req.query;

    if (age < 18) {
        res.status(400).json({ Message: "Your age is not able to access this service" })

    } else if (age > 18 && age < 40) {
        res.status(200).json({ Message: "Congratulation you are applicable for this service...!" });

    } else if (age > 40) {
        res.status(200).json({ Message: "Your Old man dont do this", arr: [4, 2] })
    }
    next()
}
module.exports = { encryptPassword, decryptpassword, createToken }