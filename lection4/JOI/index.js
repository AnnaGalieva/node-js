// const Joi = require('joi');

// const schema = Joi.string();

// const result = schema.validate('Hello,world');

// console.log(result);


// const Joi = require('joi');

// const schema = Joi.string();

// const result = schema.validate(3);

// console.log(JSON.stringify(result,null,2));
//console.log(result.error.details);



const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().min(1).required(),
    content: Joi.string().min(10).required(),
});

const result = schema.validate({
    id: 1,
    title: '1',
    content: '1226666666666',
});

console.log(result.error?.details);