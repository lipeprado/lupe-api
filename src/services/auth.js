import config from 'config';
import jwt from 'jsonwebtoken';
import HTTPSTATUS from 'http-status';

const { JWT_SECRET } = config.get(process.env.NODE_ENV);

const verifyJWTToken = async token => jwt.verify(token, JWT_SECRET);

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.sendStatus(HTTPSTATUS.UNAUTHORIZED);
  }

  const splitedToken = authorization.split(' ');
  const verify = await verifyJWTToken(splitedToken[1]);
  req.user = verify;
  next();
  return true;
};
