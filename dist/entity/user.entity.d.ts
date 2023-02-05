import { Post } from './posts.entity';
import { Comment } from './comment.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    isActive: string;
    posts: Post[];
    comments: Comment[];
}
