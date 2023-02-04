import { IsEmail, IsNumber, IsString, Min, Max, IsOptional } from "class-validator"

export class CommentDto 
{	
	@IsOptional()
	@IsEmail()
	email: string
	
	@IsOptional()
	@IsString()
	name: string

	@IsString()
	title: string

	@IsOptional()
	@IsString()
	content: string

	@IsNumber()
	@Max(5)
	@Min(1)
	rate: number

	@IsNumber()
	post: number

	@IsOptional()
	@IsNumber()
	user: number
	}

