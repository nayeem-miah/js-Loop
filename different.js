// for(let x=0; x<=20; x++){
//     if(x%2 !==0){  //x%2==1;
//         console.log(x);
//     }
// }
for(let x=1; x<=20; x+=2){
    console.log(x)
}



// give the list number 1 to 30 devided by 5;
console.log('give the list number 1 to 30 devided by 5=')
for(let i=1; i<=30; i++){
    if(i%5==0){
        console.log(i);
    }
}
// give the list number 1 to 30 devided by 3;
console.log('give the list number 1 to 30 devided by 3=')
for(let i=1; i<=30; i++){
    if(i%3==0){
        console.log(i);
    }
}
// give the list number 1 to 30 devided by 3 and 5;
console.log('give the list number 1 to 30 devided by 3 and 5=')
for(let i=1; i<=30; i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}
// give the list number 1 to 30 devided by 3 or 5;
console.log('give the list number 1 to 30 devided by 3 or 5=')
for(let i=1; i<=30; i++){
    if(i%3==0 || i%5==0){
        console.log(i);
    }
}

// ----------------------------------------------------------->
// give me sum of numbers from 1 to 20 that are divdedable by 3
console.log("sum of numbers from 1 to 20 that are divdedable by 3=");
let total=0;
for(let i=1; i<=20; i++){

    if(i % 3 === 0){
        console.log(i);
        total=total+i;
        console.log("total",total);

    }
    
}
console.log("sum of numbers from 1 to 20 that are divdedable by 3=",total);