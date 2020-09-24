// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const bullshitCreator = require('./bullshit_creator')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  const bullshit = ""
  console.log(bullshit)
  res.render('index', bullshit)
})

app.post('/', (req, res) => {
  const option = req.body.target
  const bullshit = bullshitCreator(option)
  const {engineer, designer, entrepreneur} = {engineer: option === 'engineer', designer: option === 'designer', entrepreneur: option === 'entrepreneur'}
  res.render('index', { bullshit, option, engineer, designer, entrepreneur})
})
//

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})