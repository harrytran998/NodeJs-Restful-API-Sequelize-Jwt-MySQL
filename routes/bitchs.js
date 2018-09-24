const express = require('express')
const router = express.Router()
const getConnection = require('../db')

router.get("/", (req, res) => {
    const queryString = 'SELECT * FROM Bitch'
    getConnection.query(queryString, (err, rows, fields) => {
        if (!err) {
            res.status(200).send(rows)
        } else {
            console.log(err);
        }
    })
})

module.exports = router