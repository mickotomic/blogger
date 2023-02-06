"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentModule = void 0;
const common_1 = require("@nestjs/common");
const comment_controller_1 = require("./comment.controller");
const comment_service_1 = require("./comment.service");
const typeorm_1 = require("@nestjs/typeorm");
const posts_entity_1 = require("../entity/posts.entity");
const user_entity_1 = require("../entity/user.entity");
const comment_entity_1 = require("../entity/comment.entity");
const statistics_entity_1 = require("../entity/statistics.entity");
let commentModule = class commentModule {
};
commentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([posts_entity_1.Post, user_entity_1.User, comment_entity_1.Comment, statistics_entity_1.Stats])],
        controllers: [comment_controller_1.CommentController],
        providers: [comment_service_1.CommentService],
    })
], commentModule);
exports.commentModule = commentModule;
//# sourceMappingURL=comment.module.js.map