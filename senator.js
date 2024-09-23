// program that checks eligibility to be  US senator
// working with if statements
// example data
let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

// if all requirements are met to be US senator
if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWantToRepresent) {
    console.log(`You are eligible to be a ${stateOfResidence} senator.`) // tell user

    // if one or more requirements are not met
} else {
    console.log('You are not eligible to be a US senator.') // tell user
}