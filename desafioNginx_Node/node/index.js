const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO pessoas(nome) values('Jefrey')`
connection.query(sql)

app.get('/', (req,res) => {
    const sql2 = `SELECT nome FROM pessoas`
    connection.query(sql2, (err, results) => {
        if (err) throw err
        let html = '<h1>Full Cycle Rocks!</h1>'
        results.forEach(result => {
            html += `<p>${result.nome}</p>`
        })
        res.send(html)
    })
})



app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})