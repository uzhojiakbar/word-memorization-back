const Joi = require("joi");

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
});

function validateUser(req, res, next) {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }
    next();
}

module.exports = validateUser;
