import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    newUser(body: UserDto): Promise<{
        message: string;
        data: UserDto & import("../entity/user.entity").User;
    }>;
    getOne(id: number): Promise<import("../entity/user.entity").User>;
}
