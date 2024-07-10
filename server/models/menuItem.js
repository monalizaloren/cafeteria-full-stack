const mongoose = require('mongoose');

//Criação do Schema para definir a estrutura dos documentos dentro de uma coleção.
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description: String,
});
module.exports = mongoose.model('MenuItem', menuItemSchema);
