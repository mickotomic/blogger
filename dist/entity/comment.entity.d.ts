import { Post } from './posts.entity';
import { User } from './user.entity';
export declare class Comment {
    id: number;
    post: Post;
    user: User;
    title: string;
    content: string;
    email: string;
    name: string;
    rate: number;
    isApproved: boolean;
    createdAt: Date;
    updatedAt: Date;
}
