require('dotenv/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}))

let resultado = 0
const calculo = (unidade1,unidade2, qA, qB, D) => {
    const K = 9 * (Math.pow(10,9))
    let F = 0
    const unidade = {
        mc: Math.pow(10,-3),
        uc: Math.pow(10,-6),
        nc: Math.pow(10,-9), 
    }

    return F = (K * qA * unidade[unidade1] * qB * unidade[unidade2]) / Math.pow(D,2) 
    
}

app.use(bodyParser.json())

app.get('/',(req, res) =>{
    res.render('index',{
        resultado
    })
})

app.post('/responder',(req, res) =>{
    console.log(req.body)
    resultado = calculo(req.body.unidade1, req.body.unidade2, parseFloat(req.body.qA), parseFloat(req.body.qB),parseFloat(req.body.distancia))
    res.render('index',{
        resultado
    })
})


app.listen(3000,() =>{
    console.log('Rodando ........')
})