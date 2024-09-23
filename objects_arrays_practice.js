
/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

// Extract the latitude value, and log it to the console.
console.log('Latitude: ', iss_location.iss_position.latitude)

// Extract the longitude value, and log it to the console.
console.log('Longitude: ', iss_location.iss_position.longitude)



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787

// if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
let euros = 100
let aud_rate = rates.AUD
let euros_to_aud = aud_rate * euros
console.log(`100 Euros converted to Australian Dollars is: ${euros_to_aud.toFixed(2)}`)


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({name: 'Taylor Swift', cat: 'Meredith' })

// write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
cats_and_owners.forEach(function(owner_cat){
    console.log(`${owner_cat.name}\'s cat is called ${owner_cat.cat}`)
})

// print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation
console.log(cats_and_owners[1].cat)

// print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
cats_and_owners.forEach(function(name){
if (name.name === 'Gary Oldman') {
    console.log(name.cat)
}
})



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}

// prizeList variable with all prizes data for easier accessibility
let prizeList = nobel_prize_winners_2017.prizes

// print the full name of the Literature Nobel laureate.
let literature_laureates = prizeList[3].laureates // gets laureates from the literature field
let lit_first_name = literature_laureates[0].firstname // gets laureate first name
let lit_surname = literature_laureates[0].surname // gets laureates last name
console.log(`The Literature Nobel laureate is: ${lit_first_name} ${lit_surname}.`) // display

// print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
let physics_laureates = prizeList[0].laureates // laureates for physics
console.log('All the Physics Nobel Laureates: ')
// for each loop that loops through every laureate and gets their ID
physics_laureates.forEach(function(person){
    console.log(person.id) // displays id
})

// write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
console.log('List of all 2017 prize categories: ')

prizeList.forEach(function(prize_category){
    console.log(prize_category.category)
})

// write code to print the total number of prize categories
let prizeCategories = [] // this list will hold all prize categories
// loop through every category and add it to the prizeCategories list
prizeList.forEach(function(category){
    prizeCategories.push(category.category)
})
// get the length of the prizeCategories list and display
console.log('There were '+ prizeCategories.length + ' prize categories in 2017')

// write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.
laureates_list = [] // list that holds all laureates
// loop through every category and get each laureate's name from that category and
// add laureate to the laureates_list list
prizeList.forEach(function(category){
    category.laureates.forEach(function(person){
        laureates_list.push(`${person.firstname}, ${person.surname}`)
    })
})
// get the length of the laureates list and display
console.log('There were a total of ' + laureates_list.length + ' Nobel Prize Laureates in 2017')



