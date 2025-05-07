const mysql = require ("mysql2");


const conection = mysql.createConnection({
    host: "dpg-d0dr93ndiees73a7i890-a",
    user: "josec",
    password: "oyTURJiErxQBYhQuw52SQes9KjLqvLCM",
    database: "api_clientes",
    port:'5432'
});

conection.connect((err)=>{
    if (err) throw err;
    console.log("Conectado a la base de datos MySQL")
});

module.exports=conection;