const express = require('express');
const mongoose = require('mongoose');
const app = express();
const menuRoutes = require('./routes/menu');
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Conexão com o MongoDB
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/endereço-do-seu-banco')
.then(() => {
    console.log('MongoDB Connected...');
    app.use('/api/menu', menuRoutes)
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    })
})
.catch(err => {
    console.error("MongoDB error")
})
