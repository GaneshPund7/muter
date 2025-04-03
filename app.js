const dotenv = require('dotenv');
dotenv.config();
const cluster = require('cluster');
const express = require('express');
// const router = require('./router')
const os = require('os');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();

const PORT = process.env.PORT || 3000;
console.log(PORT);


app.use(bodyParser.json())
app.use(express.json())
const cpus = os.cpus().length;
app.use(router)
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
    app.listen(PORT,()=>{
        console.log(`Server is running on port localhost: ${PORT}`);     
    })
}