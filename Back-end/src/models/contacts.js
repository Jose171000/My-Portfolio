const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define('Contacts',{
        email:{
            type: DataTypes.TEXT,
            primaryKey:true,
        },
        name:{
            type: DataTypes.STRING(25),
            allowNull:false
        },
        message:{
            type: DataTypes.TEXT,
            allowNull:true
        }
    },{
        timestamps:false
    })
}