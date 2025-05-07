const mysql = require ("mysql2");


const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "api_clientes"
});

conection.connect((err)=>{
    if (err) throw err;
    console.log("Conectado a la base de datos MySQL")
});

module.exports=conection;