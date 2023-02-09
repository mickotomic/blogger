import { PostsDto } from 'src/dto/posts.dto';
import { PostService } from './post.service';
export declare class PostController {
    private readonly PostService;
    constructor(PostService: PostService);
    getAll(): Promise<{
        data: import("../entity/posts.entity").Post[];
        count: number;
    }>;
    getOne(id: number): Promise<import("../entity/posts.entity").Post>;
    statistics(id: number): Promise<import("../entity/posts.entity").Post>;
    newElement(body: PostsDto): Promise<import("../entity/posts.entity").Post>;
    update(id: number, body: PostsDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
