const { Model, DataTypes} = require('sequelize')

class Tech extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize: connection,
            tableName: 'techs' // Força o nome da tabela caso necessário ex: 'teches'
        });
    }

    static associate(models){
        this.belongsToMany(models.User, {foreignKey: 'tech_id', through: 'user_techs', as: 'users'});
    }
}

module.exports = Tech;