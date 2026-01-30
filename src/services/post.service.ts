import Post from "../models/posts";
import { IPost } from "../types/posts";

class PostService {
    static async getAllPosts() {
        const posts = await Post.find().populate('author', '-password');
        return posts;
    }

    static async getPostById(id: string) {
        const post = await Post.findById(id).populate('author', '-password');
        return post;
    }

    static async createPost(post: IPost) {
        const newPost = await Post.create(post);
        return newPost;
    }

    static async updatePost(id: string, post: Partial<IPost>) {
        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
        return updatedPost;
    }

    static async deletePost(id: string) {
        const deletedPost = await Post.findByIdAndDelete(id);
        return deletedPost;
    }
}

export default PostService;
