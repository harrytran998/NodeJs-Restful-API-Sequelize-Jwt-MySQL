const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const getConnection = require('../db')

router.use(bodyParser.urlencoded({
    extended: false
}));
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
        if (!err) {
            res.status(200).send(rows)
        } else {
            res.send('No data found !')
        }
    })
})

router.post("/bitchs", (req, res) => {
    const queryString = 'INSERT INTO Bitch( name, price) VALUES ( ?, ?)'
    let name = req.body.name
    let price = req.body.price
    getConnection.query(queryString, [name, price], (err, rows, fields) => {
        if (!err) {
            res.status(200).send('Added new Bitch <3')
        } else {
            res.send(`OOP ! ${err}`)
        }
    })
})

router.put("/bitchs", (req, res) => {
    const queryString = 'UPDATE Bitch SET name = ?, price = ? WHERE id = ?'
    let name = req.body.name
    let price = req.body.price
    let id = req.body.id
    getConnection.query(queryString, [name, price, id], (err, rows, fields) => {
        if (!err) {
            res.status(200).send(`Update id ${id} successed !`)
        } else {
            res.status(404).send(err)
        }
    })
})

router.delete("/bitchs/:id", (req, res) => {
    const queryString = 'DELETE FROM Bitch WHERE id = ?'
    let id = req.params.id
    getConnection.query(queryString, [id], (err, rows, fields) => {
        if (!err) {
            res.status(200).send(`Deleted Bitch with id = ${id}  !`)
        } else {
            res.status(404).send(err)
        }
    })
})

router.all("*", (req, res, next) => {
    return res.send('Page not found !')
    next()
})

module.exports = router