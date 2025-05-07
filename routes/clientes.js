const express = require ("express");
const router = express.Router();
const db =require("../db");

//GET Para obtener todos los clientes
router.get('/',(req,res)=>{
    db.query('SELECT * FROM clientes', (err,results)=>{
        if (err) return res.status(500).json({error:err});
        res.json(results);
    });
});

// POST Para agregar cliente
router.post("/",(req,res)=>{
    const {name,mail,phone} = req.body;
    db.query(
        "INSERT INTO clientes (name, mail, phone) VALUES (?, ?, ?)",
        [name,mail,phone],
        (err,result)=>{
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({id:result.insertId, name, mail,phone})
        }
    );
});

// PUT Para editar cliente
router.put("/:id",(req,res)=>{
    const {id} = req.params; //quiere decir que es un parametro requerido
    const {name,mail,phone} = req.body;
    db.query(
        "UPDATE clientes SET name=?,mail=?,phone=? WHERE id=? ",
        [name,mail,phone,id],
        (err,result)=>{
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({id:result.insertId, name, mail,phone})
        }
    );
});

//DELETE Para eliminar cliente
router.delete("/:id",(req,res)=>{
    const { id } = req.params;
    db.query("DELETE FROM clientes WHERE id=?",[id],(err)=>{
        if(err)return res.status(500).json({erro:err});
        res.json({mensaje:"Cliente eliminado con exito"})
    })
})

module.exports=router;