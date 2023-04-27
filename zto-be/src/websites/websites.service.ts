import { Injectable } from '@nestjs/common';
import { CreateWebsiteDto } from './dto/create-website.dto';
import { UpdateWebsiteDto } from './dto/update-website.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Websites } from './entities/website.entity';
import { Model } from 'mongoose';

@Injectable()
export class WebsitesService {
  constructor(@InjectModel('Website') private readonly websiteModel: Model<Websites>) {}

  async create(createWebsiteDto: CreateWebsiteDto) {
    return await this.websiteModel.create(createWebsiteDto);
  }

  async findAll() {
    return await this.websiteModel.find();
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
