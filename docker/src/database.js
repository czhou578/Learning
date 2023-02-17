import mysql2 from 'mysql2'

export const database = mysql2.createConnection({
    host: "mydb",
    user: 'root',
    password: 'podium218',
    database: 'wordament',
    port: $MYSQL_DOCKER_PORT,
    multipleStatements: 'true'
})
