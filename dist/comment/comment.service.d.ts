import { Repository } from 'typeorm';
import { Post } from 'src/entity/posts.entity';
import { User } from 'src/entity/user.entity';
import { Comment } from 'src/entity/comment.entity';
import { Stats } from 'src/entity/statistics.entity';
export declare class CommentService {
    private commentRepository;
    private UserRepository;
    private postRepository;
    private statsRepository;
    constructor(commentRepository: Repository<Comment>, UserRepository: Repository<User>, postRepository: Repository<Post>, statsRepository: Repository<Stats>);
    getComments(page: any, pageLimit: any): Promise<{
        data: Comment[];
        count: number;
    }>;
    createComment(commentDto: any): Promise<any>;
    approveComment(id: number): Promise<import("typeorm").UpdateResult>;
}
