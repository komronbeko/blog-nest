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
exports.ViewsEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const posts_entity_1 = require("./posts.entity");
const users_entity_1 = require("./users.entity");
let ViewsEntity = exports.ViewsEntity = class ViewsEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], ViewsEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], ViewsEntity.prototype, "post_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => posts_entity_1.PostsEntity, (post) => post.views),
    (0, typeorm_1.JoinColumn)({ name: 'post_id' }),
    __metadata("design:type", posts_entity_1.PostsEntity)
], ViewsEntity.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, (user) => user.views),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], ViewsEntity.prototype, "user", void 0);
exports.ViewsEntity = ViewsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'views' })
], ViewsEntity);
//# sourceMappingURL=views.entity.js.map