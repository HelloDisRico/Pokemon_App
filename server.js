const express = require("express")
const app = express()
const port = process.env.port || 3000
const pokemon = require('./models/pokemon.js')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());

app.listen(port, function () {
    console.log("Server is runnin' on port 3000")
});

app.get ("/" , (req,res) => {
    res.send("Welcome to the Pokemon App!")
})
app.get('/pokemon/', (req,res) => {
    res.render('Index',{pokemon:pokemon});
});

