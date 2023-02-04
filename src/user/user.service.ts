import { Injectable } from '@nestjs/common';
import { BadGatewayException, BadRequestException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }


    async createUser(user: UserDto) {
    
        const newPost = await this.userRepository.save(user);
        if (newPost) {
            delete newPost.password;
            return {
                message: "Successfully created",
                data: newPost
            };
        } else {
            throw new BadRequestException("Post not created");
        }
    }

    async getOneUser(id: number): Promise<User> {
        const findOne = await this.userRepository.findOne({ where: { id }, relations: ['posts'] });
        if (findOne) {
            delete findOne.password;
            return findOne;
        } else {
          throw new BadRequestException("User not found");
        }
    }
    
}

