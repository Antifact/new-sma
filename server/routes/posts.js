const router = require('express').Router();
let Post = require('../models/postModel');

router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const username = req.body.username;
  const content = req.body.content;
  const image = req.body.image;
  const date = Date.parse(req.body.date);

  const newPost = new Post({
    username,
    content,
    image,
    date
  });

  newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/posts/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;