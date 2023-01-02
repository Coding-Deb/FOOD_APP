const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
const routes = require('./routes/routes')
mongoose.set('strictQuery', false);
// password : Food_plaza_1234
// usename : Food_Plaza

mongoose.connect('mongodb+srv://Food_Plaza:Food_plaza_1234@food-app-data.cxy3kak.mongodb.net/Food-App-Data?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log('Connected To Database');
    })


//JSON Format
app.use(express.json())

// Route Path
app.use('/api', routes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))