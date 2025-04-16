let count =0
function submit(){
        console.log("Hello this is no", count++);       
}

 const doSomeMagic = function(fn, delay){
let timer;
return function () {
    let context = this;
    // args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
        submit.apply(context, arguments)
    }, delay);
}
}
const mainfunction = doSomeMagic(submit, 1000)

