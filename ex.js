// task 1-------------->
console.log("this is a simple program is used while loop ");
let i=0;
while(i<=60){
  console.log(i);
    i++;

}


// ---------------------------->
console.log('for loop used 0 to 60 print number=');
for(let i=0; i<=60; i++){

    console.log(i);
}

// -----------------------------------------------------
// -------------task 2-------------------->
//          Subtask-1: odd number------>
console.log('while loop used is 61 to 100 odd number=');
let odd=61;
while(odd<100){
    console.log(odd);
    odd=odd+2;
}

console.log('for loop used is 61 to 100 odd number=');
for (let j=61;j<=100; j=j+2){
    console.log(j)
}



//              Subtask-2:even number------------->
console.log('while loop used is 78 to 100 even number=');
let e=78;
while(e<100){
   if(e % 2 === 0){
    console.log(e);
    }
e++;
    
}

// ---------------->
console.log('for loop used is 78 to 100 even number=');
for(let i=78; i<=100; i=i+2){
    console.log(i);
}



// ----------------------------------------------------
// ------------task 3-------------->
//            Subtask-1:sum of even number------->
console.log('while loop used is 81 to 311 sum of odd number=');
let number=81;
let sum=0;
while(number<=311){
    console.log(number);
    sum=sum+number;
    

    number+=2;
}
console.log('sum of all odd number=',sum);



// ---------------------------->
console.log('while loop used is 80 to 311 even mumber is=');
let total=0;
for(let i=80; i<=311; i=i+2){
    total=total+i;

}
console.log('sum of all even number=',total);



//        Subtask-1:sum of all even number---->

var n=206;
var t=0;
while(n<311){
    if(n % 2 === 0){
        console.log(n);  
        t=t+n;
        
        
    }
    
    n=n+1;
}
console.log("total number is =",t);


//  task -----4--------------------------------------->
// decrement number of 21 to 15 ..........>
console.log('decrement number of 21 to 15 ');
for(let i =21; i>=15; i--){
    console.log(i);
}


// ------------task 5------------->
// break keyword use as to 1 to 100;
console.log('break keyword use as to 1 to 100');
for(let n=0; n<=200; n++){
    if(n>100){
        break;
        
    }
    console.log(n);

}

 // -----------task 6-------------------------------->problem!!!

// console.log('sum of first number =100:');
let i=0;
let total=0;


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
while(i<=200){
    console.log(i);
    total=total+i;
    i++;
    if(total>100){
        break;
    }
}
console.log(total);

// ------------------------------------------
// task 7----------------->
console.log('print 1 to 40 skip odd number ');
for(let z=1;z<=40; z++){
    if(z%2 !==0){
        continue;

    }
    console.log(z)
}


// -------------------------------------------------------------
// task-8-------------------------------->
console.log('print 55 to 85 number devided by 5');
for(let i=55; i<=85; i++){
    if(i%5 !==0){
        continue;
    }
    console.log(i);
}


