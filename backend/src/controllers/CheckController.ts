import { Request, Response } from "express";

export class CheckController {
  public async ping(request: Request, response: Response) {
    return response.status(200).send("pong!\n");
  }
}
