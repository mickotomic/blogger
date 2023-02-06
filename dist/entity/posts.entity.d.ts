import { Comment } from './comment.entity';
import { Stats } from './statistics.entity';
import { User } from './user.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    user: User;
    comments: Comment[];
    stats: Stats;
}
