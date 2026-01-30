import mongoose from 'mongoose';
import { IPostDocument } from '../types/posts';

const postSchema = new mongoose.Schema<IPostDocument>({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        index: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    published: {
        type: Boolean,
        default: false,
        index: true,
    },
}, {
    timestamps: true,
});

const Post = mongoose.model<IPostDocument>("posts", postSchema);
export default Post;
