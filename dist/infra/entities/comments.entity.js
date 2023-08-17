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
exports.CommentsEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const posts_entity_1 = require("./posts.entity");
const users_entity_1 = require("./users.entity");
let CommentsEntity = exports.CommentsEntity = class CommentsEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], CommentsEntity.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], CommentsEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], CommentsEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], CommentsEntity.prototype, "post_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => posts_entity_1.PostsEntity, (post) => post.comments),
    (0, typeorm_1.JoinColumn)({ name: 'post_id' }),
    __metadata("design:type", posts_entity_1.PostsEntity)
], CommentsEntity.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, (user) => user.comments),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], CommentsEntity.prototype, "user", void 0);
exports.CommentsEntity = CommentsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'comments' })
], CommentsEntity);
//# sourceMappingURL=comments.entity.js.map