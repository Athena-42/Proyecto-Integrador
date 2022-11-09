const db = require('./database/models/')
console.log(db.Peliculas.findAll().then((resultados)=>console.log(resultados)))