import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  /* Receber o token */
  const authToken = request.headers.authorization

  /* Validar se token está preenchido */
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ")

  try {
    /* Validar o token*/
    const { sub } = verify(token, "74efb5e2e2c607a87838397ac8fe11cc") as IPayload;

    /* Recuperar informações do usuário */
    request.user_id = sub;

    return next();
  } catch (err) {
    /* se nao estiver autenticado ele emite um erro */
    return response.status(401).end();
  }
}