import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));



const app=express();
const port=3000;

var mypassword =false;

app.use(bodyParser.urlencoded({extended: true}));

function getpassword(req, res, next) {
    const password = req.body["password"];
        if (password==="ranbir"){
            mypassword=true;};
    next();
  }

  app.use(getpassword);

  app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

  app.post("/check",(req,res)=>{
    if(mypassword){
        res.sendFile(__dirname + "/public/secret.html");
     } else 
         {
            res.sendFile(__dirname + "/public/index.html");
        }
    
}) 



app.listen(port, ()=> {
    console.log(`server running on port ${port}.`);
})
