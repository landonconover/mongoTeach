const User = require('./models/User');

const incrementAge = async firstName => {
    const user = await User.findOne({ firstName })

    if (!user) {
        throw new Error('user not found')
    }

    user.age++
    console.log(user)

    const result = await user.save()

    console.log(result)
}

incrementAge('Luke')