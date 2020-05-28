//Validation
const Joi = require('@hapi/joi');

//Register validation
const registerValidation = () =>{
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    //Lets validate the data
    
    return schema.validate(req.body);
};

module.exports.registerValidation = registerValidation;
