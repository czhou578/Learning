
import express from 'express'
import cors from 'cors'
import { database } from './database.js'

const app = express()
app.use(cors())


// async function connect() {
//     console.log('start inside function')
//     try {
//         await new Promise((resolve, reject) => {
//             database.getConnection(err => {
//                 return err ? reject(err) : resolve(console.log('connected'))
//             })
//         })

//     } catch (error) {
//         console.log(error)
//     }
// }

// let retries = 5

// while (retries) {
//     console.log('retries number: ' + retries)
//     try {
//         connect()
//         break
//     } catch (error) {
//         retries -= 1
//         await new Promise(res => setTimeout(res, 5000))
//     }
// }

app.get("/", (_, res) => {
    let sql = `SELECT count(*) FROM USER`
    database.query(sql, (error, result) => {
        if (error) throw error

        res.send(result)
    })
})

const port = 3001
app.listen(port)