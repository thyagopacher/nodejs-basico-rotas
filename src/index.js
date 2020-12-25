const express = require('express');

const app = express();
/** define a rota / para que seja usada via GET*/
app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);    
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);    
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);    
});

/** passa a porta para a qual podera ser acessado */
app.listen(3333, () => {
    console.log('(⌐■_■) Back-end started !')
});