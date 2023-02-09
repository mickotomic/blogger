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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("../entity/posts.entity");
const exceptions_1 = require("@nestjs/common/exceptions");
const user_entity_1 = require("../entity/user.entity");
const statistics_entity_1 = require("../entity/statistics.entity");
let PostService = class PostService {
    constructor(postRepository, userRepository, statsRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.statsRepository = statsRepository;
    }
    async getPost() {
        const [data, count] = await this.postRepository.findAndCount();
        return { data, count };
    }
    async getOne(id) {
        const findOne = await this.postRepository.findOneBy({ id });
        if (findOne) {
            this.views(id);
            return findOne;
        }
        else {
            throw new exceptions_1.BadRequestException("Post not found");
        }
    }
    async createPost(post) {
        const findUserId = await this.userRepository.findOneBy({ id: post.userId });
        if (!findUserId) {
            throw new exceptions_1.BadRequestException("User not found");
        }
        const newPost = await this.postRepository.save(Object.assign({ findUserId }, post));
        await this.statsRepository.save({ post: newPost });
        return newPost;
    }
    async updatePost(id, post) {
        if (await this.postRepository.findOneBy({ id })) {
            return await this.postRepository.update({ id }, post);
        }
        throw new exceptions_1.NotFoundException("Post not found");
    }
    async deletePost(id) {
        if (await this.postRepository.findOneBy({ id })) {
            return await this.postRepository.delete({ id });
        }
        throw new exceptions_1.NotFoundException("Post not found");
    }
    async views(id) {
        const findOne = await this.postRepository.findOne({ where: { id }, relations: ['stats'] });
        if (findOne) {
            findOne.stats.wievs++;
        }
        this.statsRepository.update({ id: findOne.stats.id }, { wievs: findOne.stats.wievs });
    }
    async getStats(id) {
        return await this.postRepository.findOne({ where: { id }, relations: ['stats'] });
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(statistics_entity_1.Stats)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map