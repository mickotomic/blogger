import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class PostsDto 
	{
	@ApiProperty()
	@IsString()
	title: string

	@ApiProperty()
	@IsString()
	content: string

	@ApiProperty()
	@IsNumber()
	userId: number
	}

