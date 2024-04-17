require('dotenv').config();

const express = require('express')
const fs = require('fs')
const app = express()

const connectDB = require('./routes/config/db')

const PORT = 8888 || process.env.PORT;

// connect to MongoDB
connectDB();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('Home');
});

app.use('/', require('./routes/main'))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

