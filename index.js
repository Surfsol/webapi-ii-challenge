console.log('its alive')
const express = require('express')
const server = express()

//define postsRouter
const postsRouter = require('./posts/posts-router')

//create and import a model
//database
const Posts = require('./posts-model.js')

server.use(express.json())

//use postsRouter when '/api/posts' is called
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.json({api: 'running'})
})

const port = 8888
server.listen(port, () => console.log('server running'))