const express = require('express');
let app = express();

app.use(express.urlencoded());

app.get('/',(req,res)=>{
  res.send('hello from Js');
});

app.post('/',(req,res)=>{
  console.log(req.body);
  res.send('hello from Post Js');
})

app.listen(3000);
