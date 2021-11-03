const User = require('./models/User')

const deleteUserbyFirstname = async firstName => {
    await User.deleteOne({firstName});

    const allUsers = await User.find();
    console.log(allUsers)
}

deleteUserbyFirstname('Landon')

const deleteUserByFirstName2 = async firstName => {
    const user = await User.findOne({ firstName }); // find the given user
    if (!user) {
      throw new Error("User not found"); // If no user is found, throw an error
    }
    await user.delete();
    const allUsers = await User.find();
    console.log(allUsers);
  };