const user ={
    username:"Avi",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our platform`)
    }
}
user.welcomeMessage()
user.username = "sam" // here we change the value
user.welcomeMessage()

console.log(this)

// Arrow Function
const funk = ()=>{
    let username="Kalua"
    console.log(this.username) //output is undefined , so we should not use this keyword
    console.log(username)
}
funk()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

const addTwo = (num1,num2) => num1 + num2  // this method is very useful in React 

// const myArr = [2,5,3,7,8]
// myArr.forEach()

