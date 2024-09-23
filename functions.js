// working with functions

// function that capitalizes every character in a string
function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

// examples
console.log(shout('Hello world'))

let message = shout('hello web programmers')
console.log(message)

// function that converts fahrenheit to celsius
function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 /9
    if (decimalPlaces) {
        return celsius.toFixed(2)
    }
    else {
        return celsius
    }

}
// examples
let todayTemp = 75
todayCelsius = f_to_c(todayTemp)
console.log(todayCelsius)
