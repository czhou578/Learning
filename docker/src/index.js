
import express from 'express'
import cors from 'cors'
import { database } from './database.js'

const app = express()
app.use(cors())

database.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
  });

app.get("/", (_, res) => {
    let sql = `SELECT * FROM SCORES`
    database.query(sql, (error, result) => {
        if (error) throw error

        res.send(result)
    })
})

const port = 3001
app.listen(port)