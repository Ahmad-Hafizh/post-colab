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
  } catch (error: any) {
    res.status(500).send({
      message: "failed to signup",
      success: false,
      error: error.message,
    });
  }
};

export const signIn = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });

    res.status(200).send({
      message: "signin complete",
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "failed to signin",
      success: false,
      error: error.message,
    });
  }
};
