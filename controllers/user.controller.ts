import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const signUp = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.status(201).send({
      message: "signup complete",
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).send({
      message: "failed to signup",
      success: false,
      error,
    });
  }
};
