const User = require('./models/User')

const findAllUsers = async () => {
    const allUsers = await User.find()

    console.log(allUsers)

    return allUsers;
}

// findAllUsers()

const findUserbyFirstName = async firstName => {
    const users = await User.find({ firstName }) // {firstName: firstName}

    console.log(users)

    return users
}

findUserbyFirstName('Luke')