// For loops

// for (let hello = 0; hello <= 10; hello++) {
//     const element = hello;
//     console.log(element)

// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop value ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop value ${j}`)
     
        
//     }
    
// }

// let myArr = ["flash","Batman","Superman"]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element)
// }

// Keywords - Break and Continue

// for (let index = 1; index < 21; index++) {
//     if(index === 5){
//         console.log(`Detected 5`)
//         break
//     }
//     console.log(`value of index is ${index}`);  
// }

for (let index = 1; index < 21; index++) {
    if(index === 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`value of index is ${index}`);  
}

