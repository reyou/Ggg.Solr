// https://www.npmjs.com/package/mssql#configuration
// npm -i mssql --save
console.log("Executing file:", __filename);
const sql = require('mssql');
const config = {
    user: '...',
    password: '...',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: '...',

    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}
    // (async () => {
    //     try {
    //         const pool = await sql.connect('mssql://username:password@localhost/database');
    //         const result = await sql.query("select * from mytable where id = ${value}");
    //         console.dir(result)
    //     } catch (err) {
    //         // ... error checks 
    //     }
    // })();
