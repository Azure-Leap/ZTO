import { Injectable, Param } from '@nestjs/common';
import { CreateWebsiteDto } from './dto/create-website.dto';
import { UpdateWebsiteDto } from './dto/update-website.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Websities } from './entities/website.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class WebsitesService {
  constructor(@InjectModel('Website') private readonly websiteModel: Model<Websities> , private categoryModel: CategoriesService ) {}

  async create(createWebsiteDto: CreateWebsiteDto) {
    return await this.websiteModel.create(createWebsiteDto);
  }

  async findAll() {
    return await this.websiteModel.find()
    // return await this.websiteModel.find().populate('category', this.categoryModel).exec();
  }

  async find(@Param('id') id:string ) {
    console.log("id", id);
    const data = await this.websiteModel.find();
    console.log("==",data);
    // if(data.category !== id){
    //   console.log("data oldsngui");
    // }else{
    //     const tem =[];
    //     return tem.push(data);
    // }
  }

  async findOne(id: string) {
    return await this.websiteModel.findById(id);
  }

  async update(id: string, updateWebsiteDto: UpdateWebsiteDto) {
    return  await this.websiteModel.findByIdAndUpdate(id, updateWebsiteDto);
  }

  async remove(id: string) {
    return  await this.websiteModel.findByIdAndDelete(id);
  }
}

