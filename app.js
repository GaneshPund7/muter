const dotenv = require('dotenv');
dotenv.config();
 const mongoose = require('mongoose');
const cluster = require('cluster');
const express = require('express');
// const router = require('./router')
const os = require('os');
const bodyParser = require('body-parser');
const router = require('./router');
const route = require('./user/user.route');
const app = express();

const PORT = process.env.PORT || 3000;
console.log(PORT);
const MONGOURL = process.env.MONGOURL
console.log(MONGOURL);


app.use(bodyParser.json())
app.use(express.json())
const cpus = os.cpus().length;
app.use(router);
app.use(route);
if (cluster.isPrimary) {
    console.log(`Worker is ${process.pid} is running`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker is ${worker.process.pid} died `);
        console.log("Worker is restarting please wait..");
        setTimeout(() => {
            cluster.fork();
        }, 2000);
    })
}else{
    mongoose.connect(MONGOURL).then(()=>{ console.log("Databaase connected successfully");
    })
    app.listen(PORT,()=>{
        console.log(`Server is running on port localhost: ${PORT}`);     
    })
}