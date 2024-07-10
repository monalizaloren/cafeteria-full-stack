const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

//Cada uma dessas linhas define uma rota específica e associa uma função do controlador 
router.get('/', menuController.getAllItems);
router.post('/', menuController.createItem);
router.put('/:id', menuController.updateItem);
router.delete('/:id', menuController.deleteItem);

module.exports = router;


