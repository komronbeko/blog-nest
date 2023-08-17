"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_controller_1 = require("./comments.controller");
const typeorm_1 = require("@nestjs/typeorm");
const comments_entity_1 = require("../../infra/entities/comments.entity");
const users_entity_1 = require("../../infra/entities/users.entity");
const posts_entity_1 = require("../../infra/entities/posts.entity");
let CommentsModule = exports.CommentsModule = class CommentsModule {
};
exports.CommentsModule = CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([comments_entity_1.CommentsEntity, users_entity_1.UsersEntity, posts_entity_1.PostsEntity]),
        ],
        controllers: [comments_controller_1.CommentsController],
        providers: [comments_service_1.CommentsService],
    })
], CommentsModule);
//# sourceMappingURL=comments.module.js.map