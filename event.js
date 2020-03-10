// const events=require("events");
// const event= new events.EventEmitter();

// event.on('click',(n1,n2)=>console.log(n2+n1));
// event.emit('click',4,5);
const events=require("events");
const event= new events.EventEmitter();

const first_event=function(n1,n2){
    console.log(n2*n1);
    event.emit('click2');
    event.emit('click3');
}
const second_event=function(){
    console.log("Second Event Triggered");
}
const third_event=function(){
    console.log("third Event Triggered");
}
event.on('click2', second_event);
event.on('click3', third_event);
event.on('click', first_event);
event.emit('click',4,5);