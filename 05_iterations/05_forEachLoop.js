const coding=["JS","Ruby","Python","CPP","Java"]

// coding.forEach( function (item){
//     console.log(item)
// } )
// So This is how foreach function works on Arrays

// We can use Arrow Functions

// coding.forEach( (item) => {
//     console.log(item)
// })

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)
// So we can pass some function as a callback function in forEach loop

const myCoding = 
[
    {
        language:"JavaScript",
        fileName:"js"
    },
    {
        language:"Java",
        fileName:"java"
    },
    {
        language:"Python",
        fileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.fileName)
})

