import { z } from "zod";
import { IGenralSchema } from "../types";

const mongoIdRegex = /^[0-9a-fA-F]{24}$/;

export const createPostSchema: IGenralSchema = {
    body: z.object({
        title: z.string().min(3).max(200),
        content: z.string().min(10),
        author: z.string().regex(mongoIdRegex, "Invalid author ID format"),
        tags: z.array(z.string()).optional(),
        published: z.boolean().optional().default(false),
    })
};

export const updatePostSchema: IGenralSchema = {
    params: z.object({
        id: z.string().regex(mongoIdRegex, "Invalid post ID format")
    }),
    body: z.object({
        title: z.string().min(3).max(200).optional(),
        content: z.string().min(10).optional(),
        author: z.string().regex(mongoIdRegex, "Invalid author ID format").optional(),
        tags: z.array(z.string()).optional(),
        published: z.boolean().optional(),
    })
};

export const getPostByIdSchema: IGenralSchema = {
    params: z.object({
        id: z.string().regex(mongoIdRegex, "Invalid post ID format")
    })
};

export const deletePostSchema: IGenralSchema = {
    params: z.object({
        id: z.string().regex(mongoIdRegex, "Invalid post ID format")
    })
};
