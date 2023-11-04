const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Technologies', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        name:{
            type: DataTypes.STRING(25),
            unique: true,
            allowNull: false
        },
        date:{
            type: DataTypes.DATEONLY,
            allowNull:false
        }
    }, {
        timestamps: false
    })
}