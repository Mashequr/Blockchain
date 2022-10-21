const express = require("express");
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'blockchain_database'
});


app.get("/", (req, res)=> {
    const sqlInsert = "INSERT INTO blockchain (id, hash, nonce, block_data, prev_hash, user_id) VALUES ('123','abc#123', '123*abc', 'stuff', '12#ab', 'mash');"
    db.query(sqlInsert, (err, result)=> {
        res.send("hello Mashequr");
    });  
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
