module.exports = (sequelize, DataTypes) =>{

let alias = "Peliculas"
let cols = {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
<<<<<<< HEAD
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
=======
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
>>>>>>> fe939d1e991e7989bc4fb816fcb9a961e0712c63
    }
};
let config = {
    tableName: "movies",
<<<<<<< HEAD
    timestamps: false,
    paranoid: true
=======
    timestamps: false
>>>>>>> fe939d1e991e7989bc4fb816fcb9a961e0712c63
}

    const Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = (models) =>{
        Pelicula.belongsTo(models.Generos, {
            as: "generos",
<<<<<<< HEAD
            foreignKey: "genre_id",
            onDelete: "cascade",
=======
            foreignKey: "genre_id"
>>>>>>> fe939d1e991e7989bc4fb816fcb9a961e0712c63
        })

        Pelicula.belongsToMany(models.Actores,{
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
<<<<<<< HEAD
            timestamps: false,
            onDelete: "cascade",
=======
            timestamps: false

>>>>>>> fe939d1e991e7989bc4fb816fcb9a961e0712c63
        });
    }

    

    return Pelicula;
}