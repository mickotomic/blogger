import { Post } from './posts.entity';
export declare class Stats {
    id: number;
    post: Post;
    wievs: number;
    totalCommentsOnPost: number;
    averageRate: number;
    userComents: number;
    comentsFromAnyone: number;
}
