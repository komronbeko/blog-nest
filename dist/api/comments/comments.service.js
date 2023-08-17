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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comments_entity_1 = require("../../infra/entities/comments.entity");
const users_entity_1 = require("../../infra/entities/users.entity");
const posts_entity_1 = require("../../infra/entities/posts.entity");
let CommentsService = exports.CommentsService = class CommentsService {
    constructor(commentsRepo, usersRepo, postsRepo) {
        this.commentsRepo = commentsRepo;
        this.usersRepo = usersRepo;
        this.postsRepo = postsRepo;
    }
    async create(body) {
        const { text, post_id, subject, user_id } = body;
        const findPost = await this.postsRepo.findOneBy({ id: post_id });
        const findUser = await this.usersRepo.findOneBy({ id: user_id });
        if (!findPost || !findUser)
            throw new common_1.HttpException('user_id or post_id does not', 400);
        const newComment = await this.commentsRepo.create({
            subject,
            text,
            user_id,
            post_id,
        });
        await this.commentsRepo.save(newComment);
        return { message: 'success', newComment };
    }
    async findAll() {
        const data = await this.commentsRepo.find({ relations: ['user', 'post'] });
        return { message: 'success', data };
    }
    async findOne(id) {
        const findComment = await this.commentsRepo
            .createQueryBuilder('comment')
            .leftJoinAndSelect('comment.user', 'user')
            .leftJoinAndSelect('comment.post', 'post')
            .where('comment.id = :id', { id })
            .getOne();
        if (!findComment)
            throw new common_1.HttpException('Comment not found', 403);
        return { message: 'success', data: findComment };
    }
    async update(id, body) {
        const { subject, text } = body;
        const findComment = await this.commentsRepo.findOneBy({ id });
        if (!findComment)
            throw new common_1.HttpException('Comment not found', 403);
        await this.commentsRepo.update(id, { subject, text });
        return { message: 'success' };
    }
    async remove(id) {
        const findComment = await this.commentsRepo.findOneBy({ id });
        if (!findComment)
            throw new common_1.HttpException('Comment not found', 403);
        await this.commentsRepo.delete(id);
        return { message: 'success' };
    }
};
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comments_entity_1.CommentsEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(posts_entity_1.PostsEntity)),
    __metadata("design:paramtypes", [Object, Object, Object])
], CommentsService);
//# sourceMappingURL=comments.service.js.map