module.exports = (sequelize, DataTypes) =>{

let alias = "Peliculas"
let cols = {
    id:{
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
    rating:{
        type: DataTypes.DECIMAL(3,1)
    },
    awards:{
        type: DataTypes.INTEGER
    },
    release_date:{
        type: DataTypes.DATE
    }
};
let config = {
    tableName: "movies",
    timestamps: false
}

    const Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = (models) =>{
        Pelicula.belongsTo(models.Generos, {
            as: "generos",
            foreignKey: "genre_id"
        })

        Pelicula.belongsToMany(models.Actores,{
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false

        });
    }

    

    return Pelicula;
}