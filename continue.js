// continue-->skip rest of the code one iteration;
// break--->i'm done with this loop.loop end


for(let i=1; i<10; i++){
    console.log(i);
    if(i%2 === 1){
        continue; 
    }
    console.log(i);
}

// --------------------------------->
let i=0;
while(i < 15){
    i++;
    if(i% 5 !== 0){
        continue;
    }
    console.log(i);
}