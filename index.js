// Creating a basic web server to load pages without express js

const http = require('http');
const path = require('path');
const fs = require('fs');

//server objecct creation
const server = http.createServer((req, res) => {
   /* if(req.url === '/'){
        fs.readFile(path.join(__dirname , '/public' , 'index.html') , (err , content ) => {
        if (err) throw err;
        res.writeHead(200 , { 'Content_Type' : 'text/html'} )
        res.end(content)

        })
    }

    if(req.url === '/about'){
        fs.readFile(path.join(__dirname , '/public' , 'about.html') , (err , content ) => {
        if (err) throw err;
        res.writeHead(200 , { 'Content_Type' : 'text/html'} )
        res.end(content)

        })
    }

    // if we want to server REST API so we use JSON not html

    if (req.url === "/api/users"){
        const users = [
            {name : "shashant thakur" , age:19},
            {name : "prince" ,age: 20}
        ]
        res.writeHead( 200 , {'Content-Type' : 'application/json'})
        res.end(JSON.stringify(users))
    } */

    //Build File path 
    let filePath = path.join(__dirname , 'public' , req.url === '/' ? 'index.html' : req.url)

    //Extensions of file
    let extname = path.extname(filePath)

    //  Inital content type
    let contentType = 'text/html'

    //chech ext and set content type
    switch (extname) {
        case'.js':
        contentType = 'text/javascript';
        break;
        case'.css':
        contentType = 'text/css';
        break;
        case'.json':
        contentType = 'application/json';
        break;
        case'.png':
        contentType = 'image/png';
        break;
        case'.jpg':
        contentType = 'image/jpg';
        break;
    }

    //  REAd file
    fs.readFile(filePath , (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname , '/public' ,'404.html'), ( err ,content) => {
                    res.writeHead( 200 , {'Content-Type' : 'text/html'});
                    res.end(content , 'utf8');
                })
            }else {
                // some erver error 
                res.writeHead(500)
                res.end( ` Server Error: ${err.code}` )
            }
        }else{
            //no  errors or success
            res.writeHead( 200 , {'Content-Type' : contentType})
             res.end(content , 'utf8')
        }
    })

});

// let our environment deicde which port num or 5000
const PORT = process.env.PORT || 5000;

server.listen( PORT , () => console.log(`Server  runnign on PORT ${PORT}`));