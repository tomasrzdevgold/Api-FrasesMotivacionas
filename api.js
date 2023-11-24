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
    const quantia = req.body.quantia
    let aleatorio = parseInt( Math.random()*2)
    if(valor === "alegria"){
        const array = ['https://th.bing.com/th?id=OIP.rt2lgAyhKvp9X5eN6qLrnAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2','https://i1.wp.com/destilos.com.br/wp-content/uploads/2018/12/alegria.jpeg?ssl=1']
        let db = new sqlite3.Database('frases.db')
        let sql = `SELECT frase_motivacional FROM frases WHERE sentimentoID = 1 LIMIT ?;`
        db.all(sql,[quantia],(erro,linha)=>{
            if (erro) throw erro
               

            let resposta = `

            <table style ="
                border: 1px solid black
            "
            
         >
            <thead style ="
            border: 1px solid black
        ">
                <tr style ="
                border: 1px solid black
            ">
                    <th style ="
                    border: 1px solid black
                "> Frase </th>
                  
                </tr>
            `
            for (let index = 0; index < linha.length; index++) {
                const element = linha[index]
                const to = element["frase_motivacional"]
                resposta += `
   
        <tr>
        <td style ="
        border: 1px solid black
    "> ${to} </td>
    </tr>

                `
            }
            resposta += `    </thead>
            </table>`

            
            resposta += `<br> <img src="${array[aleatorio]}" height="400">`
            
            res.send(resposta)
        })


        db.close()
    }else if (valor === "raiva"){
        const array = ['https://th.bing.com/th?id=OIP.BxKGjtSD4Bi6S1qVHZt08gHaEy&w=311&h=200&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2','https://th.bing.com/th?id=OIP.pxQekMUL6VgbDFdTR4FSQgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2']
        let db = new sqlite3.Database('frases.db')
        let sql = `SELECT frase_motivacional FROM frases WHERE sentimentoID = 2 LIMIT ?;`
        db.all(sql,[quantia],(erro,linha)=>{
            if(erro) throw erro

        
                

            let resposta = `

            <table style ="
                border: 1px solid black
            "
            
         >
            <thead style ="
            border: 1px solid black
        ">
                <tr style ="
                border: 1px solid black
            ">
                    <th style ="
                    border: 1px solid black
                "> Frase </th>
                  
                </tr>
            `
            for (let index = 0; index < linha.length; index++) {
                const element = linha[index]
                const to = element["frase_motivacional"]
                resposta += `
   
        <tr>
        <td style ="
        border: 1px solid black
    "> ${to} </td>
    </tr>

                `
            }
            resposta += `    </thead>
            </table>`

            
            resposta += `<br> <img src="${array[aleatorio]}" height="400">`
            
            res.send(resposta)
        
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




srv.post('/cadastrofrases',(req,res)=>{
    const valor = req.body.tipo
    const frase = req.body.frase
    if(valor === "1"){
        let db = new sqlite3.Database('frases.db')
        let sql = `INSERT INTO frases (frase_motivacional, sentimentoID) VALUES (?,?);`
        db.get(sql,[frase,valor],(erro,linha)=>{
           // if(erro) throw erro

            res.send(`<!DOCTYPE html>
            <html lang="en">
            <body>
                <h1>CADASTRO COM SUCESSO</h1>
                <a href="http://127.0.0.1:5500/cadastro.html">Cadastra novas frases</a>
            </body>
            </html>
            `)
        })
        db.close()
    }
     else if(valor === "2"){
        let db = new sqlite3.Database('frases.db')
        let sql = `INSERT INTO frases (frase_motivacional, sentimentoID) VALUES (?,?);`
        db.get(sql,[frase,valor],(erro,linha)=>{
           // if(erro) throw erro

            res.send(`<!DOCTYPE html>
            <html lang="en">
            <body>
                <h1>CADASTRO COM SUCESSO</h1>
                <a href="http://127.0.0.1:5500/cadastro.html">Cadastra novas frases</a>
            </body>
            </html>
            `)
        })
        db.close()
    } else {
        res.send(`
            <p>deu algum erro</p> <a href="http://127.0.0.1:5500/cadastro.html">Cadastra novas frases</a>
        `)
    }
})



srv.listen(3030,()=>{
    console.log('Pronto... pela porta 3030')
})
