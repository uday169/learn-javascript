// break and continue example

var uday = ['Uday', 'Singh', 1997 , 'Developer', true];

// continue
for(var i =0; i < uday.length ; i++){
    if(typeof uday[i] !== 'string') 
    continue;
    console.log(uday[i]);
}

// break
for(var i =0; i < uday.length ; i++){
    if(typeof uday[i] !== 'string') 
    break;
    console.log(uday[i]);
}