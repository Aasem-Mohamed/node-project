import { Request, Response, NextFunction } from "express";
import PostService from "../services/post.service";
import { IParamsWithId } from "../types";

class PostsController {
    static async getAllPosts(req: Request, res: Response, next: NextFunction) {
        try {
            const posts = await PostService.getAllPosts();
            return res.status(200).json({ message: "Posts fetched successfully", data: posts });
        } catch (error) {
            next(error);
        }
    }

    static async getPostById(req: Request<IParamsWithId>, res: Response, next: NextFunction) {
        try {
            const post = await PostService.getPostById(req.params.id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }
            return res.status(200).json({ message: "Post fetched successfully", data: post });
        } catch (error) {
            next(error);
        }
    }

    static async createPost(req: Request, res: Response, next: NextFunction) {
        try {
            const post = await PostService.createPost(req.body);
            return res.status(201).json({ message: "Post created successfully", data: post });
        } catch (error) {
            next(error);
        }
    }

    static async updatePost(req: Request<IParamsWithId>, res: Response, next: NextFunction) {
        try {
            const post = await PostService.updatePost(req.params.id, req.body);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }
            return res.status(200).json({ message: "Post updated successfully", data: post });
        } catch (error) {
            next(error);
        }
    }

    static async deletePost(req: Request<IParamsWithId>, res: Response, next: NextFunction) {
        try {
            const post = await PostService.deletePost(req.params.id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }
            return res.status(200).json({ message: "Post deleted successfully" });
        } catch (error) {
            next(error);
        }
    }
}

export default PostsController;
