const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const logger = require('../middleware/logger');

router.use(logger);


router.get('/expenses', expenseController.getAllExpenses);

router.post('/expense', expenseController.createExpense);

router.put('/expense/:id', expenseController.updateExpense);

router.delete('/expense/:id', expenseController.deleteExpense);

module.exports = router;
