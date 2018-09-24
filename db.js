const mysql = require('mysql')

const getConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    multipleStatements: true
})
getConnection.connect((err) => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log('db is connected')
    }
})

module.exports = getConnection