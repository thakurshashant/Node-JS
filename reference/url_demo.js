const url = require('url');

const myUrl = new URL('https://mywebsite.com:8000/htllo.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//HOst (root domain)
console.log(myUrl.host)

//HOst name (doesnt include port)
console.log(myUrl.hostname)

//pathname
console.log(myUrl.pathname)

//Serialized query
console.log(myUrl.search)

//params object
console.log(myUrl.searchParams)

//add params
myUrl.searchParams.append('abc ', '123');
console.log(myUrl.searchParams);

//Loop through Params
myUrl.searchParams.forEach((value ,name) => console.log(`${name}: ${value}`))


