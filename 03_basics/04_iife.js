 // Immediately Invoked Function Expressions (IIFE)

 (function funk(){
    console.log("Db Connected")
 })()
 
// so by wrapping whole function body in() like this (function)()

( () => {
    console.log("DB Connected Two ")
} )();
