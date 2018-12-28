import HTTPSTATUS from 'http-status';
import UserModel, { encrypt } from './model';
import isAllowed from '../../services/utils';

export const getAllUsers = async (_, res) => {
  const users = await UserModel.fetchAll();
  res.send({ users });
};

export const registerUser = async (req, res) => {
  const {
    firstName, lastName, password, email, avatarUrl,
  } = req.body;
  const hash = encrypt(password);
  if (!firstName || !email || !password) {
    return res
      .status(HTTPSTATUS.BAD_REQUEST)
      .json({ message: 'Verify if you complete the entire form.' });
  }
  const formatedUser = {
    firstName,
    lastName,
    password: hash,
    email,
    avatarUrl,
  };
  try {
    await new UserModel(formatedUser).save();
    return res.status(HTTPSTATUS.OK).json({ message: 'User created with success.' });
  } catch (error) {
    return res
      .status(HTTPSTATUS.BAD_REQUEST)
      .json({ message: 'Something goes wrong, try again', error: error.detail });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const currentUserID = req.user.data.id;
  const isAlloweded = await isAllowed(id, currentUserID);
  if (!isAlloweded) {
    return res.status(HTTPSTATUS.UNAUTHORIZED).json({ message: 'User not Authorized.' });
  }

  try {
    const userToUpdate = await UserModel.where('id', id).fetch();
    const userUpdated = await userToUpdate.set(req.body).save();
    return res
      .status(HTTPSTATUS.OK)
      .json({ message: 'User updated with success.', user: userUpdated });
  } catch (error) {
    return res
      .status(HTTPSTATUS.BAD_REQUEST)
      .json({ message: 'Something goes wrong, try again.', error });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const currentUserID = req.user.data.id;

  if (!id) {
    return res
      .status(HTTPSTATUS.BAD_REQUEST)
      .json({ message: 'Id is required to do this request.' });
  }
  const isAlloweded = await isAllowed(id, currentUserID);
  if (!isAlloweded) {
    return res.status(HTTPSTATUS.UNAUTHORIZED).json({ message: 'You cannot do this.' });
  }
  try {
    await UserModel.where('id', id).destroy();
    return res.status(HTTPSTATUS.OK).json({ message: 'User deleted with success.' });
  } catch (error) {
    return res
      .status(HTTPSTATUS.BAD_REQUEST)
      .json({ message: 'Something goes wrong, try again.', error });
  }
};
