// import all that good good
const router = require('express').Router();
const User = require('../models/userModel');
// const bcrypt = require('bcrypt');
const registerUser = require('../controllers/userControllers');

// see if a user exists, for testing
router.route('/users').post(registerUser);
// router.route('/login', authUser);

router.route('/users').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// logic for creating a user
// router.post('/users', async (req, res) => {
//   try {
//     const { username, email, password, bio, image} = req.body;

//     // check if a user with this email already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ msg: 'Email already exists' });
//     }

//     // check if a user with this username already exists
//     user = await User.findOne({ username });
//     if (user) {
//       return res.status(400).json({ msg: 'Username already taken' });
//     }

//     // define the hashing process
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // create user, if all good, return with 200 and create the user in the db. 
//     // if not, set a 500 and say the server fucked up because it would have.
//     // "it's me, i, i'm the problem, it's me" - taylor swift (but really me)
//     const newUser = new User({username, email, password: hashedPassword, bio, image });
//     await newUser.save();

//     res.status(200).json({ message: 'User registered successfully!' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// export that shit, baby
module.exports = router;