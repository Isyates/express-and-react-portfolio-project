// import dependencies
const express = require('express')
const cors = require('cors')

// import JSON files
const projects = require('./projects.json')
const about = require('./about.json')

//Create our app object
const app = express()

// setup middleware
app.use(cors())

// home route for testing our app
app.get('/', (req,res)=> {
    res.send('hello world')
})

// route for retrieving project
app.get('/projects', (req,res)=> {
    // send projects via JSON
    res.json(projects)
})

// route for retrieving about info
app.get('/about', (req,res)=> {
    // send about page via JSON
    res.json(about)
})

// declare a variable for our port number
const PORT = process.env.PORT || 4000

// turn on the server listener
app.listen(PORT,()=> console.log(`listening on port ${PORT}`))