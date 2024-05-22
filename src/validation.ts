import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export default function validateParams(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const schema = Joi.object({
    year: Joi.number().required(),
    league: Joi.number().required(),
    teamId: Joi.number().required(),
  });

  const infoData = { ...req.query, teamId: req.body.teamId };

  const validateResult = schema.validate(infoData);

  if (validateResult.error) {
    res.status(404).send(validateResult.error.details);
  }

  next();
}
