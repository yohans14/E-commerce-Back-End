const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
	{
		id: {
			type: DataTypes.INTEGER,

			allowNull: false,
			// instruct that this is the Primary Key
			primaryKey: true,
			// turn on auto increment
			autoIncrement: true,
		},
		product_id: {
			DataTypes: DataTypes.INTEGER,
			references: {
				model: "product",
				key: "id",
			},
		},
		tag_id: {
			DataTypes: DataTypes.INTEGER,
			references: {
				model: "tag",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "product_tag",
	}
);

module.exports = ProductTag;
