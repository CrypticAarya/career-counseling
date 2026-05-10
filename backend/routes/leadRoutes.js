const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

// Submit lead form
router.post('/submit', leadController.submitLead);

// Book mentorship session
router.post('/book', leadController.bookMentorship);

// Confirm payment
router.post('/payment-confirm', leadController.confirmPayment);

module.exports = router;
