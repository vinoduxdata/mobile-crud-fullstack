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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const student_dto_1 = require("./student.dto");
let StudentController = class StudentController {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.student.findMany();
    }
    async getPost(id) {
        console.log("id", typeof (id));
        id = Number(id);
        console.log("id1", typeof (id));
        const studentDetail = await this.prismaService.student.findUnique({
            where: {
                id
            },
        });
        console.log(studentDetail);
        return studentDetail;
    }
    create({ id, name, course }) {
        return this.prismaService.student.create({ data: { id, name, course } });
    }
    updatePost(id, post) {
        id = Number(id);
        console.log("id", typeof (id));
        console.log(post);
        return this.prismaService.student.update({
            data: Object.assign({}, post),
            where: {
                id,
            }
        });
    }
    deleteStudent(id) {
        return this.prismaService.student.delete({
            where: { id: Number(id) }
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getPost", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.StudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, student_dto_1.StudentDto]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "deleteStudent", null);
StudentController = __decorate([
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map