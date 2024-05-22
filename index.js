const express = require("express");
const Joi = require("joi");

require('dotenv').config();

console.log(process.env);

const app = express();

app.use(express.json());

app.get(
  "/stats",
  (req, res, next) => {
    const schema = Joi.object({
      year: Joi.number().required(),
      league: Joi.number().required(),
      teamId: Joi.number().required(),
    });

    const infoData = { ...req.query, teamId: req.body.id };

    const validateResult = schema.validate(infoData);

    if (validateResult.error) {
      const err = new Error();
      err.message = validateResult.error.details[0].message;
      err.status = 404;

      next(err);
    }

    next();
  },

  (req, res, next) => {
    const { id } = req.body;
    // console.log(req.query);

    res.json({
      getId: id,
    });
  }
);

app.listen(3000, () => {
  console.log("server started!!");
});
