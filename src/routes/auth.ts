import { Request, Response } from "express";
import apiResponse from "../helpers/apiResponse";
const register = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
  } catch (error) {
    console.log(error);
    return apiResponse.errorResponse(res, "Something went wrong");
  }
};
