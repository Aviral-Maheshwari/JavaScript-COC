// We can declare ibject by two ways , it is singleton object using constructor
// Object Literals 
const mySym = Symbol("Key1")
const jsUser = {
    "full name":"Aviral Maheshwari",
    [mySym]:"myKey1",
    name:"Aviral",
    age:20,
    location:"Delhi",
    email:"avi.com",
    isLoggedin: false,
    lastLoginDays:["Monday","Saturday"]

}
// Accesing object
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])


Object.freeze(jsUser) // this would make our object immutable , now object will not show any changes


jsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(jsUser.greeting())

