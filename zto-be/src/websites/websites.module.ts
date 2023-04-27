import { Module } from '@nestjs/common';
import { WebsitesService } from './websites.service';
import { WebsitesController } from './websites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteSchema } from './entities/website.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Website', schema:WebsiteSchema}])],
  controllers: [WebsitesController],
  providers: [WebsitesService]
})
export class WebsitesModule {}
