function sayMyName(){
    console.log("A")
    console.log("V")
    console.log("I")
}

sayMyName()

function addTWo(a,b){
    console.log(a+b)
    return(a+b)
}
// Passing argument in function
function myName(username){
    console.log(`${username} just logged in`)
}

myName("Avi")
// We can pass multiple value in function by using ... spread operator
function calculatePrice(...num1){
    return num1
}
console.log(calculatePrice(200,300,100,150))

// Passing object in function
const user ={
    username:"Avi",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject({
    username:"Sas",
    price:399
})
// Passing array in function
const myNewArr =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr))
