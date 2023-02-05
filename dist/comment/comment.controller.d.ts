import { CreateCommentDto } from 'src/dto/comment.dto';
import { CommentService } from './comment.service';
export declare class CommentController {
    private readonly CommentService;
    constructor(CommentService: CommentService);
    getAll(page: number, pageLimit: number): Promise<{
        data: import("../entity/comment.entity").Comment[];
        count: number;
    }>;
    createComment(comment: CreateCommentDto): Promise<any>;
}
