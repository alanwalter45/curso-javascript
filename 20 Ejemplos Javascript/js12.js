require('http').createServer((req,res)=>{
  console.log('peticion recibida');
  res.write(`Hello world from ${req.url}`);
  res.end();
}).listen(3000)
