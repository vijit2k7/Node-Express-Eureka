const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('order',(food)=>{
    console.log('Order placed for ',food);
})

myEmitter.on('doorbell',()=>{
    console.log('RING RING!');
});

myEmitter.on('payment',(food)=>{
    console.log('Enjoy your ',food);
});

myEmitter.emit('order','biryani');
myEmitter.emit('doorbell');
myEmitter.emit('payment','biryani');
