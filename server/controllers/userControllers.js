const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const genToken = require('../utils/genToken');


const registerUser = async (req, res) => {
  try {
    const { username, email, password, bio, image } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists!" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({username, email, password: hashedPassword, bio, image });
    await newUser.save();

    res.status(200).json({ message: 'User successfully signed up!' });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

const loginUser = asyncHandler( async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      admin: user.admin,
      token: genToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error('Invalid username or password!')
  }
});

module.exports = { registerUser, loginUser };