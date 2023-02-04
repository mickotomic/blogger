import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsDto } from 'src/dto/posts.dto';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService) { }

@Post()
newUser(@Body() body: UserDto) {
  return this.UserService.createUser(body);
}
 
@Get('/:id')
getOne(@Param('id') id: number) {
  return this.UserService.getOneUser(+id);
}
    
    
}

