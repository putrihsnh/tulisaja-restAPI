const express = require('express')
const app = express()
const moongose = require('mongoose')
const bodyParser = require('body-parse')
const cors = require('cors')
require('dotenv/config')
app.use(bodyParser.urencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

//import routes
const postRoutes = require('./routes/post')

app.use('/post', postRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


moongose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = moongose.connection
db.on('eror', console.error.bind(console, 'Eror Establishing a Data base Connection'))

//hadle success
db.once('open', () => {
    console.log('Database is connected')
})

app.listen(process.env, PORT, () => {
    console.log(`Server running on port ${process.env,PORT}`)
})