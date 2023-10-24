const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Certificates', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
        },
        image: {
            type: DataTypes.JSON,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        }
    },
        {
            timestamps: false
        })
}