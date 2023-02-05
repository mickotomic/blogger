import { Post } from './posts.entity';
export declare class Stats {
    id: number;
    wievs: number;
    totalCommentsOnPost: number;
    averageRate: number;
    userComents: number;
    comentsFromAnyone: number;
    post: Post;
}
