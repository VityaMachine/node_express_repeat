import { Request, Response, NextFunction } from "express";
import axios from "axios";

export default async function getStats(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { year, league } = req.query;
  const { teamId } = <{ teamId: number }>req.body;

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/teams/statistics",
    params: {
      league,
      season: year,
      team: teamId,
    },
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
}
