const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request,response) => {
    response.send('Pahhhh');
})

app.use(express.json())


app.post('/soma', (request, response) => {
    const body = request.body;
    const numero1 = body.numero1;
    const numero2 = body.numero2;
    const resultado = {
        resultado: numero1 + numero2
    }
    response.send(resultado);
})

app.get('/noticias', (request,response) => {
    const noticia = {
        id: 1,
        texto: "atividades culturais no centro de Seara",
        autor: "Globo reporter"
    }
    response.send(noticia);
})

app.get('/noticias/seara', (request,response) => {
    response.send('Estazionado');
})

app.listen(port, () =>{
    console.group("Servidor iniciado na porta " + port);
})