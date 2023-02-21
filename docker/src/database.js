import mysql2 from 'mysql2'

export const database = mysql2.createPool({
    host: "mydb",
    user: 'root',
    password: 'podium218',
    database: 'wordament',
    waitForConnections: true,
    connectionLimit: 5,
    maxIdle: 5,
    idleTimeout: 60000,
    port: '3306',
    queueLimit: 0
})
