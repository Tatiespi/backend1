const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
const {crearUsuario, loginUsuario, revalidarToken}= require('../Controllers/auth');
const {validarCampos} = require('../middlewares/validar-campos');



router.post('/', loginUsuario)

router.post('/new', 

[
    check('name', 'El nombre es obli').not().isEmpty(),
    check('email', 'El email es obli').isEmail(),
    check('password', 'El passs es obli').isLength({min:6}),
    validarCampos
],
crearUsuario)

router.get('/renew', revalidarToken)

module.exports = router;

