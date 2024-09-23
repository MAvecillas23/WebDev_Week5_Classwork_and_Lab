// create a user object for your information in your dream job

let user = {name: 'michael',
                 email: 'michael@job.com',
                 password: 'password',
                 contact: {office: '123-456-7890', cell: '111-111-2222'},
                 roles : ['Web Developer']}

// add a salary field
user.salary = 12345
// add server admin to the roles array
user.roles.push('Server Admin')
// add a location field to user.contact
user.contact.location = 'Minneapolis'
// display
console.log(user)


