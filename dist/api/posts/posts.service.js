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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const posts_entity_1 = require("../../infra/entities/posts.entity");
const users_entity_1 = require("../../infra/entities/users.entity");
let PostsService = exports.PostsService = class PostsService {
    constructor(postsRepo, usersRepo) {
        this.postsRepo = postsRepo;
        this.usersRepo = usersRepo;
    }
    async create(body) {
        const { description, photo, title, user_id } = body;
        const findUser = await this.usersRepo.findOneBy({ id: user_id });
        if (!findUser)
            throw new common_1.HttpException('User does not exist', 400);
        const newPost = await this.postsRepo.create({
            description,
            photo,
            title,
            user_id,
        });
        await this.postsRepo.save(newPost);
        return { message: 'success', data: newPost };
    }
    async findAll() {
        const posts = await this.postsRepo.find({
            relations: ['user'],
        });
        return { message: 'success', data: posts };
    }
    async findOne(id) {
        const findPost = await this.postsRepo.findOneBy({ id });
        if (!findPost)
            throw new common_1.HttpException('Post does not exist', 400);
        return { message: 'success', data: findPost };
    }
    async update(id, body) {
        const { description, photo, title } = body;
        const findPost = await this.postsRepo.findOneBy({ id });
        if (!findPost)
            throw new common_1.HttpException('Post does not exist', 400);
        await this.postsRepo.update(id, {
            photo,
            title,
            description,
        });
        return { message: 'success' };
    }
    async remove(id) {
        const findPost = await this.postsRepo.findOneBy({ id });
        if (!findPost)
            throw new common_1.HttpException('Post does not exist', 400);
        await this.postsRepo.delete(id);
        return { message: 'success' };
    }
};
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.PostsEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [Object, Object])
], PostsService);
//# sourceMappingURL=posts.service.js.map