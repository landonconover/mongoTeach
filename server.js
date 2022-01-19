const { config } = require('dotenv');
const mongoose = require('mongoose');

//here is where the congig vars are pulled in.
const {mongoPass, mongoUser} = require('./config')


const uri = `mongodb+srv://${mongoUser}:${mongoPass}@learning.bm32j.mongodb.net/Learning?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected Successfully')
})
.catch(console.error)

// require('./createUser')
// require('./getUsers')
// require('./updateUser')
// require('./deleteUser')
