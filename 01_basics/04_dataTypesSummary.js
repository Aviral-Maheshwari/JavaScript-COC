/* Primitive DataType (Call by Value)
 String , Number , Boolean , Null , undefined , Symbol , bigInt */

/* Non Primitive (Reference Type)
 Arrays , Objects , Functions */

// Java Script is dynamically typed language 

const score = 100
const scoreValue = 100.34
const isLoggedIn = true 
const outsideTemp = null 
let userEmail ; 
const id = Symbol('123')
const anotherId = Symbol('123')
//here id and anotherId are different from each other 
console.log(id == anotherId)

const heroes =["deadpool" , "captainAmerica"]

const myFunction= function (){
    console.log("hello world")
}

console.log(typeof heroes)
