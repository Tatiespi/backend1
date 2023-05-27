const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../Controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

router.post(
  "/",
  [
    check("email", "El email debe tener un formato adecuado").isEmail(),
    check("password").isLength({ min: 6 }),
    validarCampos,
  ],
  loginUsuario
);

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password").isLength({ min: 6 }),
    validarCampos,
  ],
  crearUsuario
);

router.get("/renew", validarJWT, revalidarToken);

module.exports = router;

