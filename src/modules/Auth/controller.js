import HTTPSTATUS from 'http-status';
import UserModel, { decrypt } from '../User/model';

import createJWToken from '../../services/tokenization';

export default async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Email and password are both required' });
  const currentUser = await UserModel.where({ email }).fetch();
  const hashedPass = currentUser.get('password');
  const isValid = decrypt(password, hashedPass);
  if (isValid) {
    const details = {
      id: currentUser.get('id'),
      firstName: currentUser.get('firstName'),
      lastName: currentUser.get('lastName'),
      email: currentUser.get('email'),
    };
    const token = createJWToken(details);
    return res.status(HTTPSTATUS.OK).json({ token, type: 'Bearer' });
  }
  return res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Invalid password' });
};
