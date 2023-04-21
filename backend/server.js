const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv')

const app = express();
dotenv.config();

app.get("/api/notes/:id", (req,res) => {
    const note = notes.find((n)=> n._id === req.params.id);
    console.log(req.params);
    res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT)