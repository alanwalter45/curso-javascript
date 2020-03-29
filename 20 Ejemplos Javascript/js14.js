function uno(){
  setTimeout(()=>{
    console.log('uno');
  },3000);
}

function dos(uno){
  uno();
  console.log('dos');
}

dos(uno);
