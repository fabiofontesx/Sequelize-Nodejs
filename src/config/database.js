module.exports = {
    dialect: 'postgres',
    host: '172.17.0.2',
    username: 'docker',
    password: 'Fabio3564',
    database: 'sqlnode',
    define:{
        timestamps: true, //Toda tabela tem o createdAt e updatedAt
        underscored: true //Formato snake case 
    },
}