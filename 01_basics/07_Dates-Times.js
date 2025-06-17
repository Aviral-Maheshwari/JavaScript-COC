let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())

newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate)






