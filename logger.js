const EventEmitter = require('events');
const uuid = require('uuid');

//uuid used to identify id or generate random id of 36 bit

class Logger extends EventEmitter {
    log(msg){  //method
        // call event
        this.emit('message', { id:uuid.v4() , msg})
    }
}




const Logger = require('./logger.js')

const logger = new Logger();

logger.on('message' ,data => console.log('called Listener' , data))

logger.log('Hello World');