import { ApiProperty } from "@nestjs/swagger";
import { Post } from "src/entity/posts.entity";
import { User } from "src/entity/user.entity";

export class CreateCommentDto {

    @ApiProperty({type: Number})
    post: Post;

    @ApiProperty({type: Number})
    user: User;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    rate: number;

}
// export class CommentDto 
// {	
// 	@IsOptional()
// 	@IsEmail()
// 	email: string
	
// 	@IsOptional()
// 	@IsString()
// 	name: string

// 	@IsString()
// 	title: string

// 	@IsOptional()
// 	@IsString()
// 	content: string

// 	@IsNumber()
// 	@Max(5)
// 	@Min(1)
// 	rate: number

// 	@IsNumber()
// 	post: number

// 	@IsOptional()
// 	@IsNumber()
// 	user: number
// 	}

