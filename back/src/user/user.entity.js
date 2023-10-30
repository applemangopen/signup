const { DataTypes, Model, sequelize } = require("../entity");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        pw: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "local",
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        original_filename: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "User",
    }
);

module.exports = User;
