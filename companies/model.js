const Sequelize = require('sequelize')
const sequalize = require('../db')

const Company = sequalize.define('companies', {
    name:{
        type:Sequelize.STRING,
        field: 'name',
        allowNull: false
    },
    foundingYear: {
        type:Sequelize.INTEGER,
        field:'founding_year',
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        field: 'description',
        allowNull: true
    }
}, {
    timestamp: false,
    tableName: 'companies'
});

module.exports = Company