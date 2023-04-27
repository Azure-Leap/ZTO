import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategorySchema } from './entities/category.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService, CloudinaryService],
})
export class CategoriesModule {}
