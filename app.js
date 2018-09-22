const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')



const app = express()
app.use(morgan("short"))

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'F402'
    })
}

app.get("/info/:id", (req, res) => {
    const queryString = 'Select * from Info'
    getConnection().query(queryString, (err, rows, fields) => {
            if(err){
                res.status(404).send({
                    message: 'Fuck'
                })
            }
            console.log('Suceess')
        res.json(rows)
    })
})

let PORT = process.env.PORT || 3003
app.listen(PORT, () => {
    console.log(`Starting `);
})

