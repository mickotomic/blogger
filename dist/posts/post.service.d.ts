import { PostsDto } from 'src/dto/posts.dto';
import { Repository } from 'typeorm';
import { Post } from 'src/entity/posts.entity';
import { User } from 'src/entity/user.entity';
import { Stats } from 'src/entity/statistics.entity';
export declare class PostService {
    private postRepository;
    private userRepository;
    private statsRepository;
    constructor(postRepository: Repository<Post>, userRepository: Repository<User>, statsRepository: Repository<Stats>);
    getPost(): Promise<{
        data: Post[];
        count: number;
    }>;
    getOne(id: number): Promise<Post>;
    createPost(post: PostsDto): Promise<{
        user: User;
        stats: Stats;
        title: string;
        content: string;
        userId: number;
    } & Post>;
    updatePost(id: number, post: PostsDto): Promise<import("typeorm").UpdateResult>;
    deletePost(id: number): Promise<import("typeorm").DeleteResult>;
    views(id: number): Promise<void>;
    getStats(id: number): Promise<Post>;
}
