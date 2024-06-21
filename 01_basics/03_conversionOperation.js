let score = 33
console.log(typeof score)
console.log(typeof(score))

score = "33abc"
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

score = null
console.log(typeof(Number(score)))
console.log(Number(score))

score = undefined
console.log(typeof(Number(score)))
console.log(Number(score))

score = false
console.log(typeof(Number(score)))
console.log(Number(score))

// Note on Conversion:
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// All these are basic conversion

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false; "Deepa" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)





