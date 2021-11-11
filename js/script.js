//RAFAEL
// variável para armazenar as funções do express (framework do node.js)
const express = require('express');
//variável para armazenar as funções do módulo fs
const fs = require('fs');
//variável para armazenar o número da portado servidor
const porta = 3000;
//instanciando o express para a variável app
const app = express();
// Definindo uma rota com .use() para entregar os arquivos de imagem através do middleware express.static()
app.use('/img', express.static('img'))
//executando a função get através da variável app
app.get('/', (req, res)=>{
    fs.readFile('index.html', (err, arquivo)=>{
        //testando se houve algum erro, se teve erro imprime o erro no console
        if(err){
            console.log(err)
        }else{
            //se não ocorreu erro, exige o arquivo index.hml
            res.set({'Content-Type': 'html'})
            res.send(arquivo)
        }
    });
});
//essa é a segunda rota que chama produtos.html
app.get('/produtos', (req, res)=>{
    fs.readFile('produtos.html', (err, arquivo) =>{
        if(err){
            console.log(err)
        }else{
            //se não ocorreu erro, exige o arquivo index.hml
            res.set({'Content-Type': 'text/html'})
            res.send(arquivo)
        }
    })
})

//essa é a terceira rota que chama carrinho.html
app.get('/quemsomos', (req, res)=>{
    fs.readFile('quemSomos.html', (err, arquivo) =>{
        if(err){
            console.log(err)
        }else{
            //se não ocorreu erro, exige o arquivo index.hml
            res.set({'Content-Type': 'text/html'})
            res.send(arquivo)
        }
    })
})

//essa é a terceira rota que chama carrinho.html
app.get('/carrinho', (req, res)=>{
    fs.readFile('carrinho.html', (err, arquivo) =>{
        if(err){
            console.log(err)
        }else{
            //se não ocorreu erro, exige o arquivo index.hml
            res.set({'Content-Type': 'text/html'})
            res.send(arquivo)
        }
    })
})
app.listen(porta,()=>{console.log(`Servidor rodando na porta: ${porta}`)})

//