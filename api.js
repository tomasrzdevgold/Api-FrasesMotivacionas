const express = require("express")
const sqlite3 = require("sqlite3")
const srv = express()
srv.use(require('body-parser').urlencoded({ extended: false }));

srv.get('/frase/alegre',(req,res)=>{
    let db = new sqlite3.Database('frases.db')
    let sql = `SELECT frase_motivacional FROM frases WHERE sentimentoID = 1;`
    db.all(sql,[],(erro,linha)=>{
        if(erro) throw erro
        res.json(linha)
    })
    db.close()
})

/*
srv.post('/frase',(req,res)=>{
    if (req.body.alegria){
        let db = new sqlite3.Database('frases.db')
        let sql = `SELECT frase_motivacional FROM frases WHERE sentimentoID = 1 LIMIT ?;`
        console.log(req.body.alegria)
        db.all(sql,[req.body.quantia],(erro,linha)=>{
            if(erro) throw erro
            res.json(linha)
            const jsonlist = JSON.stringify(linha)
            console.log(jsonlist)
           
        })
        db.close()

    } else if (req.body.raiva){
        let db = new sqlite3.Database('frases.db')
        let sql = `SELECT frase_motivacional FROM frases WHERE sentimentoID = 2 LIMIT ?;`
        db.all(sql,[req.body.quantia],(erro,linha)=>{
            if(erro) throw erro
            res.json(linha)
           
        })
        db.close()
       

    }
})
*/

srv.post('/frase',(req,res)=>{
    const valor = req.body.tipo
    if(valor === "alegria"){
        let db = new sqlite3.Database('frases.db')
        let sql = `SELECT frase_motivacional FROM frases WHERE sentimentoID = 1;`
        db.all(sql,[],(erro,linha)=>{
            if (erro) throw erro
            res.json(linha)
        })


        db.close()
    }else if (valor === "raiva"){
        let db = new sqlite3.Database('frases.db')
        let sql = `SELECT frase_motivacional FROM frases WHERE sentimentoID = 2 LIMIT ?;`
        db.all(sql,[quantia],(erro,linha)=>{
            if(erro) throw erro
            res.json(linha)
        
    })
        db.close()

    }
})


/*

srv.post('/frase',(req,res)=>{
    const valor = req.body.tipo
    const quantia = req.body.quantia
    if(valor === "alegria"){
        let db = new sqlite3.Database('frases.db')
        let sql = `SELECT frase_motivacional FROM frases WHERE sentimentoID = 1 LIMIT ?;`
        db.all(sql,[quantia],(erro,linha)=>{
            if(erro) throw erro
            res.json[linha]
            
        })

    }else if (valor === "raiva"){
        let db = new sqlite3.Database('frases.db')
        let sql = `SELECT frase_motivacional FROM frases WHERE sentimentoID = 2 LIMIT ?;`
        db.all(sql,[quantia],(erro,linha)=>{
            if(erro) throw erro
            res.json(linha)
        
    })
    db.close()

    }
})


*/




srv.post('/cadastro',(req,res)=>{
    const valor = req.body.tipo
    const frase = req.body.frase
    if(valor === "1"){
        let db = new sqlite3.Database('frases.db')
        let sql = `INSERT INTO frases (frase_motivacional, sentimentoID) VALUES (?,?);`
        db.get(sql,[frase,valor],(erro,linha)=>{
            if(erro) throw erro

            res.send(`<!DOCTYPE html>
            <html lang="en">
            <body>
                <h1>CASTRO COM SUCESSO</h1>
            </body>
            </html>
            `)
        })
        db.close()
    }else {
        res.send(`
            <p>de algum erro</p> <a href="http://127.0.0.1:5500/cadastro.html">Cadastra novas frases</a>
        `)
    }
  
})



srv.listen(3030,()=>{
    console.log('Pronto... pela porta 3030')
})