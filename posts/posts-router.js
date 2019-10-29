const express = require('express')

const router = express.Router()

const dbModel = require('../data/db')

//for any url that begins with /api/posts

//creates a post using the information sent inside the `request body`.  
router.post('/', (req, res) => {
    const postBody = req.body
    if(!postBody.title || !postBody.contents){
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    } else {
        dbModel 
            .insert(postBody)
            .then((user => {
                res.status(201).json(user)
            }))
            .catch(error => {
                res.status(500).json({ error: "There was an error while saving the post to the database" })
            })
    }

}) 

router.post('/:id/comments', (req, res) => {
    const postBody = req.body
    const id = req.params.id
    if(!id){
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    } else if (!postBody){
        res.status(400).json({ errorMessage: "Please provide text for the comment." })
    } else {
        dbModel
            .update(id, postBody)
            .then(posts => {
                res.status(201).json(posts)
            })
            .catch(error => {
                res.status(500).json({ error: "There was an error while saving the comment to the database" })
            })
    }


}) 

//Creates a comment for the post with the specified id using information sent inside of the `request body`
router.post('/', (req, res) => {

}) 

//Returns an array of all the post objects contained in the database.
router.get('/', (req, res) => {
    dbModel
        .find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => {
            res.send(500).json({ error: "The posts information could not be retrieved." })
        })

}) 

//Returns the post object with the specified id.
router.get('/:id', (req, res) => {

}) 

//Returns an array of all the comment objects associated with the post with the specified id.
router.get('/:id/comments', (req, res) => {

}) 

//Removes the post with the specified id and returns the **deleted post object**. 
//You may need to make additional calls to the database in order to satisfy this requirement.
router.delete('/:id', (req, res) => {

})

//Updates the post with the specified `id` using data from the `request body`. 
router.put('/:id', (req, res) => {

})



//add an endpoint that returns all the messages 


//to export
module.exports= router