import mysql from 'mysql2'

export const database = mysql.createConnection({
    host: "mydb",
    user: 'root',
    password: 'podium218',
    database: 'wordament',
    multipleStatements: 'true'
})
