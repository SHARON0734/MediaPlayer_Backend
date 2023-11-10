// import json-server library in index-js
const jsonServer = require('json-server') 

//create server using json-server library
const mediaPlayerServer = jsonServer.create()

// create a path to db.json (it has the data)
const router = jsonServer.router('db.json')

//middleware to convert  js to json   ( to communicate)
const middleware = jsonServer.defaults()     //default call cheyyanam

//connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


//by deafult aayit json server 3000 aan run avunnat front end um 3000 aanu
// run avunnat so atu tammil clash avate irikan port set cheyanam
//setup port for server
const port = 5000 || process.env.PORT  //process kodukunat host cheyumba baki ulavar ayit clash avateirikan

//monitor 4000       // server connecttion varunnundo enn listen cheyunat
mediaPlayerServer.listen(port,()=>{
    console.log(`media player server is listening to ${port} and waiting for the request`);
})