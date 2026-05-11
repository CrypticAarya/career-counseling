const express = require('express');
const { register, login, getMe, getSignedUpUsers } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/signed-up-users', protect, getSignedUpUsers);

module.exports = router;
