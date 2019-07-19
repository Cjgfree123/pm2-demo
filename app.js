const express = require("express");

const app = express();

app.get("/",function(req, res, next){
    res.end("hello chen");
});

app.listen(3001,()=>{
    console.log("listen at 3001");
});
