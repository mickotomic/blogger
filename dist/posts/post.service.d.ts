import { PostsDto } from 'src/dto/posts.dto';
import { Repository } from 'typeorm';
import { Post } from 'src/entity/posts.entity';
import { User } from 'src/entity/user.entity';
export declare class PostService {
    private postRepository;
    private userRepository;
    constructor(postRepository: Repository<Post>, userRepository: Repository<User>);
    getPost(): Promise<{
        data: Post[];
        count: number;
    }>;
    getOne(id: number): Promise<Post>;
    createPost(post: PostsDto): Promise<{
        user: User;
        title: string;
        content: string;
        userId: number;
    } & Post>;
    updatePost(id: number, post: PostsDto): Promise<import("typeorm").UpdateResult>;
    deletePost(id: number): Promise<import("typeorm").DeleteResult>;
}
