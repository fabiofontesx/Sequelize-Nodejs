const { Op } = require('sequelize')
const User = require('../model/User');

module.exports = {
    async show(req, res){
        //Encontrar todos usuários que tem email que termina com @rocketseat.com.br
        //Buscar todos os que moram na rua "Rua Guilherme Gembala"
        // Buscar as techs que começam com React

        const user = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@rocketseat.com.br'
                },
            },
            include: [
                {
                    association: 'addresses',
                    where: {
                        street: 'Rua Guilherme Gembala'
                    } 
                },
                
                {
                    association: 'techs',
                    required: false, //Só trará as tecnologias que começam com React,
                    //Caso nao existe nenhuma tecnologia com React, o Sequelize apenas nao exibirá a tecnologia
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        } 
                    } 
                }
            ]
        })
        return res.json(user);
    }
};