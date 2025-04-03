// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer')

const createTransport = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.ethereal.email",
    secure: false,
    port: 587,
    auth: {
        user: "chinmay.deolekar1@gmail.com",
        pass: "vurx dywq jchy mxuy",
    },
});
 async function sendMail() {
    try {
        const sendMail = await createTransport.sendMail({
            to: "ganesh.pund@nimapinfotech.in",
            from: "ganeshpund0000@gmail.com",
            subject: "Hello Ganesh",
            html: "<h4> Hello this is mail checking service</h4>",
        })
    } catch (error) {
        console.log("Mail not send ", error.message);

    }
}

module.exports = {sendMail};