"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Blog documantation')
        .setDescription('Blogs API description. You can test them out in-site!')
        .setVersion('1.0')
        .addTag('Blogs')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    const PORT = +process.env.PORT;
    await app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map