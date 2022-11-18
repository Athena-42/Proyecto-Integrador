module.exports = (sequelize, DataTypes) =>{

<<<<<<< HEAD
    let alias = "Actores"
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
    };
    let config = {
        tableName: "actors",
        timestamps: false
    }
    
        const Actor = sequelize.define(alias, cols, config);
    
        Actor.associate = (models) =>{
            
            Actor.belongsToMany(models.Peliculas,{
                as: "movies",
                through: "actor_movie",
                foreignKey: "actor_id",
                otherKey: "movie_id",
                timestamps: false,
                onDelete: "cascade",
            });
        }
    
        
    
        return Actor;
    }
=======
let alias = "Actores"
let cols = {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.DECIMAL
    }
};
let config = {
    tableName: "actors",
    timestamps: false
}

    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = (models) =>{
        
        Actor.belongsToMany(models.Peliculas, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false

        });
    }
    return Actor;
}
>>>>>>> fe939d1e991e7989bc4fb816fcb9a961e0712c63
