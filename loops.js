// working with loops

let birds = ['Owl', 'Robin', 'Eagle']

// foreach loop that prints each item in the birds array list on a new line
birds.forEach(function(bird){
    // repeat once for each object in array
    //function will be called for each object in array
    console.log(bird)
})

// for loop
for (let x = 0; x < birds.length; x++) {
    let bird = birds[x]
    console.log(bird.toUpperCase())
}

console.log(birds.length)