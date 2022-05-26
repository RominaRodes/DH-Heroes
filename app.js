const express = require('express')
const app = express();
const path = require('path');

app.get('/', (req,res)=> {
    let indexHtml = path.resolve(__dirname,'./views/index.html')
    res.sendFile(indexHtml);
})
app.get('/babbage', (req,res)=> {
    let babbageHtml = path.resolve(__dirname,'./views/babbage.html')
    res.sendFile(babbageHtml);
})
app.get('/berners-lee', (req,res)=> {
    let bernersHtml = path.resolve(__dirname,'./views/berners-lee.html')
    res.sendFile(bernersHtml);
})

app.get('/clarke', (req,res)=> {
    let clarkeHtml = path.resolve(__dirname,'./views/clarke.html')
    res.sendFile(clarkeHtml);
})
app.get('/hamilton', (req,res)=> {
    let hamiltonHtml = path.resolve(__dirname,'./views/hamilton.html')
    res.sendFile(hamiltonHtml);
})
app.get('/hopper', (req,res)=> {
    let hopperHtml = path.resolve(__dirname,'./views/hopper.html')
    res.sendFile(hopperHtml);
})
app.get('/lovelace', (req,res)=> {
    let lovelaceHtml = path.resolve(__dirname,'./views/lovelace.html')
    res.sendFile(lovelaceHtml);
})
app.get('/turing', (req,res)=> {
    let turingHtml = path.resolve(__dirname,'./views/turing.html')
    res.sendFile(turingHtml);
})
app.use(express.static('public'));

app.listen(3030, ()=> console.log('servidor escuchando puerto'));