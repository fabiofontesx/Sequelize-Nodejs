const Tech = require('../model/Techs');
const User = require('../model/User');

module.exports = {
    async store (req, res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: 'User not found'});
        }

        const [ tech ] = await Tech.findOrCreate({
            where: { name }
        });

        await user.addTechs(tech);
        return res.json(tech);
    },
    
    async index(req, res){
        const { user_id } = req.params;

        const user_techs = await User.findByPk(user_id, {
            include: { 
                association: 'techs',
                attributes: [ 'id', 'name' ],
                through: {
                    attributes: [] //remove os dados da tabela pivot (user_techs)
                }
            }
        });


        if(!user_techs){
            return res.status(400).json({error: 'User not found'});
        }

        return res.json(user_techs);
    },

    async delete(req, res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: 'User not found'});
        }

        const tech = await Tech.findOne({
            where: { name }
        });

        await user.removeTech(tech);

        return res.json({success: true});
    }
}