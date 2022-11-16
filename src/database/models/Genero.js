module.exports = (sequelize, DataTypes) =>{

let alias = "Generos"
let cols = {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    ranking: {
        type: DataTypes.INTEGER
    }
};
let config = {
    tableName: "genres",
    timestamps: false
}

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = (models) =>{
        Genero.hasMany(models.Peliculas, {
            as: "peliculas",
            foreignKey: "genre_id"
        })
    }
    return Genero;
}
