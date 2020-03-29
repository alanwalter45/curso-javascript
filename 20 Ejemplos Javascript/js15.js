function uno(){
  return new Promise((resolve)=>{
    setTimeout(function(){
      resolve(console.log('uno'));
    },3000);
  })
}

async function dos(uno){
  await uno();
  console.log('dos');
}

dos(uno);
