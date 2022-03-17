'use strict';
const calcTip=function(bill){
    // let tip=bill<300 && bill>50 ? (bill*0.15):(bill*0.20);
    // const total=bill+tip;
    // console.log(`The bill was ${bill} and the tip was ${tip} Total is ${total}`);
    
    if(bill<300 && bill>50 ){
        let tip=bill*0.15;
    
        return tip;
        // const total=bill+tip;
        // console.log(`The bill was ${bill} and the tip was ${tip} Total is ${total}`);
    }
    else {
       let tip= bill*0.2;
     
       return tip;
    //   const  total=bill+tip;
    //     console.log(`The bill was ${bill} and the tip was ${tip} Total is ${total}`);
    }
}
  
const bill=[125,555,44];
const tip=[calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])]
//  const total=[calcTip(bill[0])+bill[0]+calcTip(bill[1])+bill[1]+calcTip(bill[2])+bill[2]];
const total=[bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]]
console.log(bill,tip,total);
  