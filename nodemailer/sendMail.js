// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer')

const createTransport = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.ethereal.email",
    secure: false,
    port: 587,
    auth: {
        user: "ganesh.pund@nimapinfotech.in",
        pass: "nlyt xcke kumx atlh",
    },
});
async function sendMail(email, password) {
    try {
        await createTransport.sendMail({
            to: email,
            from: "ganesh.pund@nimapinfotech.in",
            subject: "Nimap Infotech OTP",
            html: `<p>Your user Name is ${email} and OTP is <b> ${password} </b></p>
            <p> dont share otp with any one </p>
            <p>thanks and regard </p>
            <b>Nimap Infotech</b>`,

        })
    } catch (error) {
        console.log("Mail not send", error.message);

    }
}

module.exports = { sendMail };