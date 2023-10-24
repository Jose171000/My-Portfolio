const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define('Projects', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type:DataTypes.STRING(25),
            unique:true,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false,
            unique: true
        },
        date:{
            type:DataTypes.DATE,
            allowNull: false
        },
        url:{
            type:DataTypes.TEXT,
            allowNull:false,
            unique:true
        }
    },{
        timestamps:false
    })
}