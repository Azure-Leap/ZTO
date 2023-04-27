import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { Category } from './entities/category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
    private cloudinary: CloudinaryService,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryModel.create(createCategoryDto);
  }

  async findAll() {
    const res = await this.categoryModel.find();
    return res;
  }

  async findOne(id: string) {
    return await this.categoryModel.findById(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    // const { image } = updateCategoryDto;
    // const cat = this.categoryModel.findById({ id });
    // let prevImgs = cat.categoryIms;
    // const updatedIms = [...prevImgs, image];
    // let newInputs = { ...updateCategoryDto, updatedIms };

    const newInputs = updateCategoryDto;

    return await this.categoryModel.findByIdAndUpdate(id, newInputs, {
      new: true,
    });
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id);
  }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudinary.uploadImage(file);
  }
}
