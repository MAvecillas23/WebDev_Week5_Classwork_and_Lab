// function that joins a state and a city together in a string
function location(city, state) {
    return city + ', ' + state.toUpperCase()
}

// some example data
console.log(location('Minneapolis', 'mn'))
let address = location('Seattle', 'wa')

console.log(address)