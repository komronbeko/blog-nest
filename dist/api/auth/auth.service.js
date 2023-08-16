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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../../infra/entities/users.entity");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = exports.AuthService = class AuthService {
    constructor(usersRepo, jwt) {
        this.usersRepo = usersRepo;
        this.jwt = jwt;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const findUser = await this.usersRepo.findOneBy({ email });
        if (!findUser)
            throw new common_1.ForbiddenException();
        const comparePass = await bcrypt.compare(password, findUser.password);
        if (!comparePass)
            throw new common_1.ForbiddenException();
        const token = this.jwt.sign({ id: findUser.id });
        return { message: 'success', data: token };
    }
    async register(registerdto) {
        const { email, password, photo, username } = registerdto;
        const findUser = await this.usersRepo.findOneBy({ username });
        if (findUser)
            throw new common_1.ForbiddenException();
        const hashedPass = await bcrypt.hash(password, 12);
        const newUser = await this.usersRepo.create({
            username,
            email,
            password: hashedPass,
            photo,
        });
        await this.usersRepo.save(newUser);
        const token = this.jwt.sign({ id: newUser.id });
        return { message: 'success', data: { ...newUser, token } };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof users_repo_1.UserRepo !== "undefined" && users_repo_1.UserRepo) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map