import { Injectable } from '@nestjs/common';
import { CloudinaryService } from './cloudinary/cloudinary.service';
@Injectable()
export class AppService {
  constructor(private cloudinary: CloudinaryService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    console.log('file ', file);
    return await this.cloudinary.uploadImage(file);
  }
}
