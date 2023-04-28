import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req, Res } from '@nestjs/common';
import { WebsitesService } from './websites.service';
import { CreateWebsiteDto } from './dto/create-website.dto';
import { UpdateWebsiteDto } from './dto/update-website.dto';
import { title } from 'process';
import { CategoriesService } from 'src/categories/categories.service';
import { stringify } from 'querystring';

@Controller('websites')
export class WebsitesController {
  constructor(private readonly websitesService: WebsitesService, private categoryService: CategoriesService) {}

  @Post()
  create(@Body() createWebsiteDto: CreateWebsiteDto) {
    return this.websitesService.create(createWebsiteDto);
  }

  @Get()
  findAll() {
    return this.websitesService.findAll();
  }
  @Get('/filter/:id')
  async find(@Param('id') id:string) {
    console.log("ooid",id);
    const webs = await this.websitesService.find(id);
    return webs
  }
 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.websitesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWebsiteDto: UpdateWebsiteDto) {
    return this.websitesService.update(id, updateWebsiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.websitesService.remove(id);
  }
}