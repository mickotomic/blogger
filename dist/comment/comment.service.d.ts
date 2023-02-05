import { Repository } from 'typeorm';
import { Post } from 'src/entity/posts.entity';
import { User } from 'src/entity/user.entity';
import { Comment } from 'src/entity/comment.entity';
export declare class CommentService {
    private commentRepository;
    private UserRepository;
    private postRepository;
    constructor(commentRepository: Repository<Comment>, UserRepository: Repository<User>, postRepository: Repository<Post>);
    getComments(page: any, pageLimit: any): Promise<{
        data: Comment[];
        count: number;
    }>;
    createComment(commentDto: any): Promise<any>;
}
