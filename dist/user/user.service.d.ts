import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: UserDto): Promise<{
        message: string;
        data: UserDto & User;
    }>;
    getOneUser(id: number): Promise<User>;
}
