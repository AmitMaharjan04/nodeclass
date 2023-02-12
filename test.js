const express = require('express')
const app = express()
const port = 3002
const bodyParser = require('body-parser') 
const cors= require('cors');
const calculateHelper=require('./calculateHelper')
const authorization=require('./authorizationCheck')
const mysqlHelper=require('./mysqlHelper')
require('dotenv').config();
(process.env.MYSQL_DB_USER)

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


app.post('/get-hello/', async(req,res) => {
  res.status(200).send(`sum of age is ${calculateHelper.sum(req.body.age1,req.body.age2)}`)
})

app.post('/login', async(req,res) =>{
  const name=await calculateHelper.login(req.body);
  console.log(name);
  res.status(200).send(`welcome ${name}`)

  
})

app.post('/sign-in', (req,res) =>{
  const email=req.body.email;
  const password=req.body.password;
  // let emailChecked= authorization.email(email);
  // let passwordChecked=authorization.password(password);
  //const check=authorization.checkExistingEmail(email);
  const check2=authorization.validation(email,password);
  // if(emailChecked ==true&& passwordChecked==true){
  //     console.log("success")
  // }
  // console.log("incorrect")
    //console.log(check)
})
app.post('/sign-up',(req,res) => {
  const name=req.body.name;
  const address=req.body.address;
  // const phone=req.body.phone;
  const age=req.body.age;
  const sql=`insert into user values('${name}','${address}',${age})`;
  
  const result=mysqlHelper.query(sql);
  console.log(result)
  // const email=req.body.email;
  // const password=req.body.password;
  // authorization.newAccount(email,password);
})
app.listen(port, () => {
  mysqlHelper.connection();
  console.log(`Example app listening on port ${port}`)
})