
var resume = {                    //created resume in JSON format.
    "fullName":"Manoj",
    "email":"manojannadurai2265@gmail.com",
    "phoneNumber":"9944112684",
    "address":"palayamkottai , tirunelveli",
    "summary":"junior web developer seeking for a job",
    "education":"pg",
    "skills":["html","css","js","nodejs"]
}

//using for loop
var keys=Object.keys(resume);
for(let i=0;i<keys.length;i++)
{
  let key=keys[i];
  let value=resume[key];
  if(Array.isArray(value)){               //Array.isArray() is a built-in function 
    for(var a=0;a<value.length;a++){          // It checks the value is an array or not.
      console.log(value[a]);
    }
  }
  else{
    console.log(value);
  }
}

for(var i=0;i<resume.length;i++)
{
    console.log(resume.key[i]);
}

//using for in loop
for(var key in resume){
   if(Array.isArray(resume[key])){
    for(var i=0;i<resume[key].length;i++){
      console.log(resume[key][i]);
    }
   }
   else{
    console.log(resume[key]);
   }
}

//using for of loop
var valarr=Object.values(resume) //converting object to array for using for of and for each loop
for(var value of valarr){
  if(Array.isArray(value)){
    for(var skill of value){
      console.log(skill);
    }
  }
  else{
      console.log(value)
  }
}

//using for each loop.
valarr.forEach(function(value){

   if(Array.isArray(value)){
    value.forEach(function(innerarr){
      console.log(innerarr);
    });
  }
  else{
    console.log(value);
  }
})



