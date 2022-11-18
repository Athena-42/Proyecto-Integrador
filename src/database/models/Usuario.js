module.exports = (sequelize, DataTypes) =>{

    let alias = "Usuarios"
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        remember_token:{
            type: DataTypes.STRING,
            allowNull: false
        },
        rol:{
            type: DataTypes.INTEGER
        },
    };
    let config = {
        tableName: "users",
        timestamps: false
    }
    
        const Usuario = sequelize.define(alias, cols, config);
    
        return Usuario;
    }