const express = require('express')
const app = express()
const port = 3002
const bodyParser = require('body-parser') 
const cors= require('cors');
const calculateHelper=require('./calculateHelper')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({ origin:"*"}));
app.set("port", port);

app.get('/get-hello/', (req, res) => {
  // console.log(req);
  
  console.log(req.query);
  // const name=req.query["name"];
  const age1=req.query["age1"];
  const age2=req.query["age2"];
  // let addName=req.query["name2"];
  // const s=basic(req.query.age1,req.query.age2);
  const sum=calculateHelper.sum(req.query.age1,req.query.age2);
  // let sum= parseInt(age1)+parseInt(age2);
  // addName=name.concat(addName);
  // console.log(`my name is ${name} and age is ${age1}`);
  res.status(200).send(`sum is ${sum}`);
  // res.status(200).send(`my name is ${name} and age is ${age1}\n`);
  
  // res.status(200).send(`sum of age = ${sum}`);
  // res.status(200).send(`Concat string = ${addName}`);
})


app.post('/get-hello/', (req,res) => {
  res.status(200).send(`sum of age is ${calculateHelper.sum(req.body.age1,req.body.age2)}`)
})

app.post('/login', (req,res) =>{
  const name=calculateHelper.login(req.body);
//   if(response.username!=null){
  // console.log(name.username);
    // res.status(200).send(`welcome ${name.username}`)
// }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})