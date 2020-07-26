const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')
// Show
router.get('/', (req, res) => {
    Comment.find()
      .then(comments => {
        res.send(comments)
      })
      .catch(err => console.error(err))
})
// Create
router.post('/', (req, res) => {
  // check the body of the request for empty string and remove them from the body
  console.log(':football:')
  console.log(req.body)
  console.log(':football:')
  // res.send(req.body)
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
  Comment.findOneAndDelete({_id: req.params.id })
    .then(deleteComment => {
      console.log(deleteComment)
      res.send({message: 'Successful Deletion'})
    })
    .catch(err => console.error(err))
})
module.exports = router;