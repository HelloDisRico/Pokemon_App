require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')

const pokemon = require('./models/pokemon')

const MONGO_URI = process.hasUncaughtExceptionCaptureCallback.MONGO_URI;
const config = {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
};
const methodOverride = require('method-override');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedToplogy: true,
})

app.set('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})

app.get ('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon});
})

app.get('/pokemon/:id', (req, res) =>{
    res.send(req.params.id);
})