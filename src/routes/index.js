const {Router} = require('express');
const router = Router();

const {apiCoffe,apiAutonomia,apiBodega,apiCalificaciones} = require('../controller/index.controller');

router.get('/coffe',apiCoffe);
router.get('/autonomia',apiAutonomia);
router.get('/bodega',apiBodega);
router.get('/calificaciones',apiCalificaciones);


module.exports = router;