if(true){
    let a=10
    const b = 20
    var c = 30     
}
//console.log(a)
//console.log(b)
console.log(c) 

// Nested Scope
function one(){
    const userName = "Avi"
    function two(){
        const webSite = "Youtube"
        console.log(username)
    }
    
    //console.log(webSite)
    two()
}
one()