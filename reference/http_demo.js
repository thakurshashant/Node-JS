const http = require('http');

//create server object
http.createServer((req , res) => {
    //when we get a req we 
    //write response
    res.write('response from server to browser');
    res.end()
}).listen(5000, () => console.log('Server running...'))   //in order to run it need to listen on a port 