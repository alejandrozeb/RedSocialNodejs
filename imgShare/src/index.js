const express = require("express");
const config = require("./server/config");
//database
require("./database");
const app= config(express());


//iniciando server
app.listen(app.get('port'), ()=>{
    console.log('Server on port: ', app.get('port'));
});