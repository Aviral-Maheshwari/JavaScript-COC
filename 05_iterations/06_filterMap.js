
 const myNums = [1,2,3,4,5,6,7,8,9,10]
 const newNums = myNums.filter( (num)=> num>4 )
 console.log(newNums)

// This would not work , here we have to return 
const myNums1 = [1,2,3,4,5,6,7,8,9,10]
 const newNums1 = myNums.filter( (num)=>{
     return num>4
 } )
 console.log(newNums)

// using for each loop
const newNums2=[]
myNums1.forEach( (numss)=>{
    if (numss>4){
        newNums2.push(numss)
    }
})
console.log(newNums2)