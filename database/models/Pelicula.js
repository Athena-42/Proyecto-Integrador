module.exports = (sequelize, DataTypes) =>{

let alias = "Peliculas"
let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    length:{
        type: DataTypes.INTEGER
    },
};
let config = {
    tableName: "movies",
    timestamps: false
}

    const Pelicula = sequelize.define(alias, cols, config);
    return Pelicula;
}