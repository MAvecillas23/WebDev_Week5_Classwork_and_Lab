// working with arrays

let animals = ['lion', 'tiger', 'cheetah']
// prints array
console.log(animals)
// prints whatever animal is in index 1
console.log(animals[1])
// doesn't exist... is undefined
console.log([10000])

// adds giraffe to index 6... by doing this
// index 5 has an empty item
animals[6] = 'giraffe'
console.log(animals)

// changing an item in index 1
animals[1] = 'zebra'
console.log(animals)

// adding elephant to the end of the animals array
animals.push('elephant')
console.log(animals)

// adding deer to the beginning of the animals array
animals.unshift('deer')
console.log(animals)

// removes the last item in the animals array
animals.pop()
console.log(animals)

// removes the first item in the animals array
let firstAnimal = animals.shift()
// outputs the item removed as well
console.log(firstAnimal)
console.log(animals)

// reverse the order of the animals array
animals.reverse()
console.log(animals)

// orders the array in alphabetical order... if numerical, from shortest to highest
animals.sort()
console.log(animals)

// gets the number of items in the animals array
let numberOfAnimals = animals.length
console.log(numberOfAnimals)

// gets the index of a certain item... if the certain is not in the array
// ... -1 is returned which means null
console.log(animals.indexOf('lion'))

// checks if something is in an array
if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

// converts all the items in the animals array into one big string
console.log(animals.join(' * '))

// printing animal in a new line
animals.forEach(function(animal){
    console.log(animal)
})

// display each animal in the array and its length
animals.forEach(function(animal){
    console.log(`${animal} has ${animal.length} letters.`)
})

// get the length of each string in the animals array
// then append those numbers into a new array
let numbers = []

animals.forEach(function(animal){
    let animalLength = animal.length
    numbers.push(animalLength)
})
console.log(numbers)
