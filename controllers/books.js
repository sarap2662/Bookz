const router = require('express').Router()
const db = require('../models')

// INDEX
router.get('/', (req, res) => {
    db.Book.find()
        .then(books => {
            res.status(200).json({ books })
        })
        .catch(err => {
            res.status(400).json({ error: 'No books found' })
        })
})

// SHOW
router.get('/:id', (req, res) => {
    db.Book.findById(req.params.id)
        .then(book => {
            res.status(200).json({ book })
        })
        .catch(err => {
            res.status(400).json({ error: 'No book found' })
        })
})

// UPDATE
router.put('/:id', (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedBook => {
            console.log(req.body)
            res.status(200).json({ updatedBook })
        })
        .catch(err => {
            res.status(400).json({ error: 'Error, could not edit the book' })
        })
})

// DELETE
router.delete('/:id', (req, res) => {
    db.Book.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json({ message: 'Book deleted' })
        })
        .catch(err => {
            res.status(400).json({ error: 'Error, could not delete the book' })
        })
})

// CREATE
router.post('/', (req, res) => {
    db.Book.create(req.body)
        .then(newBook => {
            res.status(200).json({ newBook })
        })
        .catch(err => {
            res.status(400).json({ error: 'Error, could not create book' })
        })
})



module.exports = router