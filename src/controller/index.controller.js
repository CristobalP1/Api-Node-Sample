
const CofeeApi = require('../samples/coffeMarket.json');
const AutonomiaApi = require('../samples/autonomiaFinanciera.json');
const CalificacionesApi = require('../samples/calificaciones.json');
const BodegaApi = require('../samples/bodegaSeguimiento.json');

const apiAutonomia = (req,res)=>{
    res.send(AutonomiaApi);
}

const apiCalificaciones = (req,res)=>{
    res.send(CalificacionesApi);
}
const apiCoffe = (req,res)=>{
    res.send(CofeeApi);
}
const apiBodega = (req,res)=>{
    res.send(BodegaApi);
}

module.exports = {
    apiCoffe,
    apiAutonomia,
    apiCalificaciones,
    apiBodega,
}