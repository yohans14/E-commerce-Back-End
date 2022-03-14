const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
	{
		id: {
			type: DataTypes.INTEGER,

			allowNull: false,
			// instruct that this is the Primary Key
			primaryKey: true,
			// turn on auto increment
			autoIncrement: true,
		},
		tag_name: {
			DataTypes: DataTypes.STRING,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "tag",
	}
);

module.exports = Tag;
