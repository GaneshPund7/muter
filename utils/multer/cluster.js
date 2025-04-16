const express = require('express');

const app = express;
const Port = 3000;

const cluster = require('cluster');

const os = require('os');

const cpus = os.cpus.length;
if(cluster.isPrimary){
    console.log(`Worker is  ${process.pid} on ruuning `);
    cluster.fork();

    for(let i=0; i<cpus; i++){
        cluster.fork();  
    }
    cluster.on('exit', (worker, code, signal)=>{
        console.log(`Worker is ${worker.process.pid} is died`);
        console.log("Please wait warker is restarting...");
        setTimeout(() => {
            cluster.fork();
        }, 2000);
    })
    
}else{
    app.listen(Port, ()=>{ console.log(`Server is running on port ${Port}`);
    })
}