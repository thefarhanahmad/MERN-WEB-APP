// importing model
const User = require("../models/userModel");

// register controller
const register = async (req, res) => {
  try {
    // fetching data from req body
    console.log(req.body);
    const { username, email, phone, password, isAdmin } = req.body;

    // validating user data
    if (!username || !email || !password || !phone) {
      res.json({ message: "All fields are required" });
    }

    // create db and insert users data
    const user = await User.create({
      username: username,
      email: email,
      password: password,
      phone: phone,
      isAdmin: isAdmin,
    });

    // send userdata as response
    console.log("req body : ", req.body);
    console.log("User data : ", user);

    res.status(200).json({
      message: "user resgistered successfully",
      user: user,
    });
  } catch (error) {
    console.log("errror occured while registering user");
  }
};

// login controller
const login = async (req, res) => {
  try {
    res.status(200).send("login controllers working fine");
  } catch (error) {
    console.log("errror occured while login user");
  }
};

module.exports = { register, login };
