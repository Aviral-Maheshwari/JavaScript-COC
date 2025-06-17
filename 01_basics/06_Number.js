const balance = 100
// console.log(balance)
const amount = new Number(200)

// console.log(amount)
// console.log(amount.toString().length)
// console.log(balance.toFixed(2)) // to get number upto some decimal places
const otherNum = 123.8966
// console.log(otherNum.toPrecision(3))

const hundreds = 100000
// console.log(hundreds.toLocaleString()) // to convert it in us value
// console.log(hundreds.toLocaleString('en-IN')) // to convert it in Indian value

/**********************Maths *************/

// console.log(Math) //Math is just a library like Number 
// console.log(Math.abs(-2))
// console.log(Math.floor(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.round(4.6))
// console.log(Math.min(4,6,3,8)) //return min value from array
// console.log(Math.max(4,6,3,8)) //return max value from array

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log((Math.floor(Math.random()*10)+1))

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1)) + min) //it would return some values always greater than min 
