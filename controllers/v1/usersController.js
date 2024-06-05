
import * as userService from "../../services/userService.js";

export const usersSignin = async (req, res, next) => {
  try {
    const result = await userService.signin(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const usersLogin = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const usersDelete = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await userService.deleteUser(userId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const usersList = async (req, res, next) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const usersActivationCodeRequest = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await userService.activationCodeRequest(userId, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const usersUpdate = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await userService.updateUser(userId, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
