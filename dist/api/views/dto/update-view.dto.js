"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateViewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_view_dto_1 = require("./create-view.dto");
class UpdateViewDto extends (0, swagger_1.PartialType)(create_view_dto_1.CreateViewDto) {
}
exports.UpdateViewDto = UpdateViewDto;
//# sourceMappingURL=update-view.dto.js.map