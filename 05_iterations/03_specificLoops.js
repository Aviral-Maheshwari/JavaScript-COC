// for of loops

const arr = [1,2,3,4,5]

for (const ele of arr) {
    console.log(ele)
}

// Maps 
const map = new Map()
map.set("in","India")
map.set("US","United States of America")
map.set("en","England")

for(const [key,val] of map){
    console.log(key,":-",val)
}

