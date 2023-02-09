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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
const typeorm_1 = require("typeorm");
const posts_entity_1 = require("./posts.entity");
let Stats = class Stats {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Stats.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => posts_entity_1.Post, (post) => post.stats),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", posts_entity_1.Post)
], Stats.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Stats.prototype, "wievs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Stats.prototype, "totalCommentsOnPost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', default: 0 }),
    __metadata("design:type", Number)
], Stats.prototype, "averageRate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Stats.prototype, "userComents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Stats.prototype, "comentsFromAnyone", void 0);
Stats = __decorate([
    (0, typeorm_1.Entity)({ name: 'stats' })
], Stats);
exports.Stats = Stats;
//# sourceMappingURL=statistics.entity.js.map