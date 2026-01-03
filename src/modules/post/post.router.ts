import { NextFunction, Request, Response, Router } from "express";
import { AuthConstant } from "../../constant/auth";
import { auth as betterAuth } from "../../lib/auth";
import { PostController } from "./post.controller";

const router = Router();

// const auth = async(req: Request, res: Response, next: NextFunction  ) => {

//  }

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const session = await betterAuth.api.getSession({
      headers: req.headers as any,
    });

    console.log({ session });
  };
};

router.post(
  "/",
  auth(AuthConstant.admin, AuthConstant.user),
  PostController.createPost
);

router.get("/", PostController.getAllPost);

export const postRouter = router;
