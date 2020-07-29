require('dotenv').config()
const express = require('express')
const Comment = require('../models/comment')
const router = express.Router()


// Index
router.post('/eventcomments', async function index(req, res) {
  try {
      const comments = await Comment.find({eventId: req.body.data.event})
          .populate('postedBy', 'name')
      res.json(comments)
  }
  catch(error) {
      console.log(error)
      res.sendStatus(500)
  }
})
  
// Create
router.post('/', (req, res) => {
  
  Comment.create(req.body)
    .then(newComment => {
      res.send(newComment)
    })
    .catch(err => console.error(err))
})
// Update
router.put('/:id', (req, res) => {
  
  Comment.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    { new: true }
  )
  .then(updatedComment => {
    res.send(updatedComment)
  })
  .catch(err => console.error(err))
})
// Delete
router.delete('/:id', (req, res) => {
  Comment.findByIdAndDelete({_id: req.params.id })
    .then(deleteComment => {
      console.log(deleteComment)
      res.send({message: 'Successful Deletion'})
    })
    .catch(err => console.error(err))
})
module.exports = router;
