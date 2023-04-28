import { Module } from '@nestjs/common';
import { WebsitesService } from './websites.service';
import { WebsitesController } from './websites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteSchema } from './entities/website.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Website', schema:WebsiteSchema}]), CategoriesModule],
  controllers: [WebsitesController],
  providers: [WebsitesService]
})
export class WebsitesModule {}
