const marvelHeroes = ["Thor", "IronMan", "Spiderman"]
const dcHeroes = ["Batman", "SuperMan" ,"Flash"]

//marvelHeroes.push(dcHeroes)
console.log(marvelHeroes)
// so here we get an array inside array , means this function take array as single data 

newArr = marvelHeroes.concat(dcHeroes)
console.log(newArr)

// We can use Spread Operator ...

const allHeroes = [...marvelHeroes,...dcHeroes]
console.log(allHeroes)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr)

// For data scrapping , or data formatting 
console.log(Array.isArray("Aviral"))
console.log(Array.from("Aviral"))

console.log(Array.from({name:"Aviral"})) // here it gives an empty array as it can't find out whether to make array from key or value
let score1 = 100
let score2= 200
let score3 = 300
console.log(Array.of(score1,score2,score3))




