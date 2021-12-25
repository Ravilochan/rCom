import { Response } from "express";

const successResponse = function (res: Response, msg: string) {
  const data = {
    success: true,
    message: msg,
  };
  return res.status(200).json(data);
};

const successResponseWithData = function (
  res: Response,
  msg: string,
  data: any
) {
  const resData = {
    success: true,
    message: msg,
    data: data,
  };
  return res.status(200).json(resData);
};

const errorResponse = function (res: Response, msg: string) {
  const data = {
    success: false,
    message: msg,
  };
  return res.status(500).json(data);
};

const notFoundResponse = function (res: Response, msg: string) {
  const data = {
    success: false,
    message: msg,
  };
  return res.status(404).json(data);
};

const validationErrorWithData = function (
  res: Response,
  msg: string,
  data: any
) {
  const resData = {
    success: false,
    message: msg,
    data: data,
  };
  return res.status(400).json(resData);
};

const unauthorizedResponse = function (res: Response, msg: string) {
  const data = {
    success: false,
    message: msg,
  };
  return res.status(401).json(data);
};

const forbiddenResponse = function (res: Response, msg: string) {
  const data = {
    success: false,
    message: msg,
  };
  return res.status(403).json(data);
};

export default {
  successResponse,
  successResponseWithData,
  errorResponse,
  notFoundResponse,
  validationErrorWithData,
  unauthorizedResponse,
  forbiddenResponse,
};
