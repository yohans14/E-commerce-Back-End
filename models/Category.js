const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

//creat category model
class Category extends Model {}

Category.init(
	{
		// define an id column
		id: {
			// use the special Sequelize DataTypes object provide what type of data it is
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		// define a category_name column
		category_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "category",
	}
);

module.exports = Category;
