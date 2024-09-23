// console.log is like the equivalent of using print() in python
console.log('Hello World!')

// three ways to create variables
let color = 'blue'
var size = 'medium' // not recommended
const language =  'JavaScript' // can't change this value... constant variable

//number types
let quantity = 5
let distance = 4.5

// string types
let text = 'Hello World'
let message = 'Hi Programmers'

// joining strings and variables
console.log('There are ' + quantity + ' programmers')

let todayTemp = 75
console.log('Today\'s temperature is ' + todayTemp + 'F')

// math
let tempC = (todayTemp - 32) * 5 / 9
// the toFixed() method rounds tempC to two decimal places
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')

// working with template strings
let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode}, ${className}.`)