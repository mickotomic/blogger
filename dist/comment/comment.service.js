"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("../entity/posts.entity");
const exceptions_1 = require("@nestjs/common/exceptions");
const user_entity_1 = require("../entity/user.entity");
const comment_entity_1 = require("../entity/comment.entity");
let CommentService = class CommentService {
    constructor(commentRepository, UserRepository, postRepository) {
        this.commentRepository = commentRepository;
        this.UserRepository = UserRepository;
        this.postRepository = postRepository;
    }
    async getComments(page, pageLimit) {
        const [data, count] = await this.commentRepository.findAndCount({
            where: { isApproved: true },
            take: pageLimit, skip: (page - 1) * pageLimit
        });
        return { data, count };
    }
    async createComment(commentDto) {
        if (!commentDto.rate || (commentDto.rate < 1 || commentDto.rate > 5)) {
            throw new exceptions_1.BadRequestException("Inavlid rate");
        }
        if (!commentDto.title) {
            throw new exceptions_1.BadRequestException("Inavlid title");
        }
        const post = await this.postRepository.findOneBy({ id: commentDto.post });
        if (!post) {
            throw new exceptions_1.NotFoundException("Post not found");
        }
        return await this.commentRepository.save(commentDto);
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(posts_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map