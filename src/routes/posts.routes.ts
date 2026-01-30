import { Router } from "express";
import PostsController from "../controllers/posts.controller";
import validateSchema from "../middlewares/validator";
import { createPostSchema, updatePostSchema, getPostByIdSchema, deletePostSchema } from "../schemas/posts";

const router = Router();

// get all posts
router.get("/", PostsController.getAllPosts);

// get post by id
router.get("/:id", validateSchema(getPostByIdSchema), PostsController.getPostById);

// create a new post
router.post("/", validateSchema(createPostSchema), PostsController.createPost);

// update post by id
router.patch("/:id", validateSchema(updatePostSchema), PostsController.updatePost);

// delete post by id
router.delete("/:id", validateSchema(deletePostSchema), PostsController.deletePost);

export default router;
