import { Comment } from './comment.entity';
import { User } from './user.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    user: User;
    comments: Comment[];
    stats: any;
}
