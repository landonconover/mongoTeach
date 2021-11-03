const User = require('./models/User');

const newUser = new User({
    firstName: 'Luke',
    lastName: 'Skywalker',
    age: 31,
    email: 'luke@useTheForce.com'
})

newUser.save().then(doc => {
    console.log('new user added');
    console.log(doc)
})