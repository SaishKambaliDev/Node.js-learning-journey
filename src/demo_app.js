const express = require("express");

const app = express();
app.use(express.json())

const notes = []

// title, description

// post api

app.post('/notes', (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "note created successfully"
    })
});

// get api
app.get('/notes', (req, res) => {
    
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })

});

//delete api

app.delete('/notes/:index', (req, res) => {

    const index = req.params.index

    delete notes [ index ]

    res.status(200).json({
        message: "Note deleted successfully"
    })
})

// patch method

app.patch('/notes/:index', (req, res) => {

    const index = req.params.index;

    const description = req.body.description;

    notes[ index ].description = description;

    res.status(200).json({
        message: "Updated note successfully"
    })
})

module.exports = app;