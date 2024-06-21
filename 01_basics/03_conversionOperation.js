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

// *********** Operations ************

let value = 3
let negValue = -value
console.log(negValue)

// Basic operations are not discussed here
// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 3)
// console.log(2 / 3)
// console.log(2 % 3)

// Discuss only tricky things

let str1 = "Hello"
let str2 = " Deepa"
let str3 = str1 + str2
console.log(str3)

console.log(1 + "2")
console.log("1" + 2)
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

// Never Do This
console.log(+true)
console.log(+"")

let gameCounter = 100
++gameCounter
console.log(gameCounter)

// Link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion










