import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Post } from "src/entity/posts.entity";
import { User } from "src/entity/user.entity";

export class CreateCommentDto {

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    post: Post;

    @ApiProperty({ type: Number })
    @IsOptional()
    user: User;

    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    content: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    email: string;

    @ApiProperty()
    @IsNumber()
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

