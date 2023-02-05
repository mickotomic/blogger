import { Post } from "src/entity/posts.entity";
import { User } from "src/entity/user.entity";
export declare class CreateCommentDto {
    post: Post;
    user: User;
    title: string;
    content: string;
    name: string;
    email: string;
    rate: number;
}
