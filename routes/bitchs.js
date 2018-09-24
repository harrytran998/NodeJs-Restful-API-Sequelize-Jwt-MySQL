const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const getConnection = require('../db')

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())

router.get("/", (req, res) => {
    res.send('Ahihihi Đồ ngốc 😜 😜 ')
})

router.get("/bitchs", (req, res) => {
    const queryString = 'SELECT * FROM Bitch'
    getConnection.query(queryString, (err, rows, fields) => {
        if (!err) {
            jsonString = rows
            res.status(200).send(rows)
        } else {
            console.log(err);
        }
    })
})

router.get("/bitchs/:id", (req, res) => {
    const bitchID = req.params.id
    const queryString = 'SELECT * FROM Bitch WHERE id = ?'
    getConnection.query(queryString, [bitchID], (err, rows, fields) => {
        if (!err) {
            res.status(200).send(rows)
        } else {
            console.log(err);
        }
    })
})

router.get("/bitchs/search/:key", (req, res) => {
    let key = req.params.key
    const queryString = 'SELECT * FROM Bitch WHERE name LIKE ?'
    getConnection.query(queryString, ['%' + key + '%'], (err, rows, fields) => {
        if(!err){
            res.status(200).send(rows)
        }else{
            res.send('No data found !')
        }
    })
})

router.post("/bitchs", (req, res) => {
    const queryString = 'INSERT INTO Bitch( name, price) VALUES ( ?, ?)'
    let name = req.body.name
    let price = req.body.price
    getConnection.query(queryString, [name, price] , (err, rows, fields) => {
        if(!err){
            res.status(200).send('Added new Bitch <3')
        }else{
            res.send(`OOP ! ${err}`)
        }        
    })
})

module.exports = router