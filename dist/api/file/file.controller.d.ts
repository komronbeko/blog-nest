/// <reference types="multer" />
export declare class FileController {
    uploadFile(file: Express.Multer.File): {
        name: string;
        message: string;
    };
}
