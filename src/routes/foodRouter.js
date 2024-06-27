const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/foods', foodController.getListFood);
router.get('/foods/:id', foodController.getSearchFood);
router.post('/foods', foodController.createFood);
router.put('/foods/:id', foodController.updateExistFood);
router.delete('/foods/:id', foodController.deleteFood);

module.exports = router;