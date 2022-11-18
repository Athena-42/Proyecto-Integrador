module.exports = (sequelize, DataTypes) =>{

let alias = "Peliculas"
let cols = {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    length:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating:{
        type: DataTypes.DECIMAL(3,1),
        allowNull: false
    },
    awards:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    release_date:{
        type: DataTypes.DATE,
        allowNull: false
    }
};
let config = {
    tableName: "movies",
    timestamps: false,
    paranoid: true
}

    const Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = (models) =>{
        Pelicula.belongsTo(models.Generos, {
            as: "generos",
            foreignKey: "genre_id",
            onDelete: "cascade",
        })

        Pelicula.belongsToMany(models.Actores,{
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false,
            onDelete: "cascade",
        });
    }

    

    return Pelicula;
}