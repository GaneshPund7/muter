var cron = require('node-cron');

cron.schedule('* * * * * *', () => {
  console.log('running a task every minute');
});

// cron.schedule('******',()=>{
//     console.log("Hello this will executed after the one second");
// })