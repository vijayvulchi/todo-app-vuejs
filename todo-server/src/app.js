const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/tasks', (req, res) => {
  res.send(
    [
	    {
	      title: "Hello World!",
	      description: "Hi there! How are you?"
	    },
	    {
	      title: "Hello!",
	      description: "Hi there! I am good. How are you?"
	    }
    ]
  )
})

app.listen(process.env.PORT || 8081)
