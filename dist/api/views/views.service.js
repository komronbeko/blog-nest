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
exports.ViewsService = void 0;
const common_1 = require("@nestjs/common");
const views_entity_1 = require("../../infra/entities/views.entity");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../../infra/entities/users.entity");
const posts_entity_1 = require("../../infra/entities/posts.entity");
let ViewsService = exports.ViewsService = class ViewsService {
    constructor(viewsRepo, usersRepo, postsRepo) {
        this.viewsRepo = viewsRepo;
        this.usersRepo = usersRepo;
        this.postsRepo = postsRepo;
    }
    async addView(body) {
        const { post_id, user_id } = body;
        const findPost = await this.postsRepo.findOneBy({ id: post_id });
        const findUser = await this.usersRepo.findOneBy({ id: user_id });
        if (!findPost || !findUser)
            throw new common_1.HttpException('user_id or post_id does not', 400);
        const findView = await this.viewsRepo.findBy({ post_id, user_id });
        if (findView.length) {
            return { message: 'Already viewed' };
        }
        const newView = await this.viewsRepo.create({
            user_id,
            post_id,
        });
        await this.viewsRepo.save(newView);
        return { message: 'success', data: newView };
    }
    async findAll() {
        const data = await this.viewsRepo.find({ relations: ['user', 'post'] });
        return { message: 'success', data };
    }
    async getPostViews(id) {
        const findPost = await this.postsRepo.findOneBy({ id });
        if (!findPost)
            throw new common_1.HttpException('Post not found', 403);
        const postViews = await this.viewsRepo
            .createQueryBuilder('view')
            .leftJoinAndSelect('view.user', 'user')
            .leftJoinAndSelect('view.post', 'post')
            .where('view.id = :id', { id })
            .getMany();
        return { message: 'success', data: postViews };
    }
};
exports.ViewsService = ViewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(views_entity_1.ViewsEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(posts_entity_1.PostsEntity)),
    __metadata("design:paramtypes", [Object, Object, Object])
], ViewsService);
//# sourceMappingURL=views.service.js.map