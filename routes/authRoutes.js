const router = require('express').Router();

const authCtrl = require('../controllers/authController')

router.post('/register', authCtrl.register)
router.post('/login', authCtrl.login)
router.post('/logout', authCtrl.logout)
router.post('/refresh_token', authCtrl.generateAcessTokken)

module.exports = router
