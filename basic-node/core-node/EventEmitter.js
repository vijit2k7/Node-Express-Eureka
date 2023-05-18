const EventEmitter = require('events');

const myEmitter = new EventEmitter(); // doorbell is ordered from amazon

myEmitter.on('doorbell',()=>{
    console.log('sound triggered')
});  // doorbell from box to door

myEmitter.emit('doorbell');
myEmitter.emit('doorbell');
myEmitter.emit('doorbell');
myEmitter.emit('doorbell');