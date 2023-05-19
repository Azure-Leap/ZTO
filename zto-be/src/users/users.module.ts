import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import * as nodemailer from 'nodemailer'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'User', schema:UserSchema}]),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('localhost'),
          port: configService.get('9010'),
          secure: false,
          auth: {
            user: configService.get('GMAIL_ZTO_EMAIL'),
            pass: configService.get('GMAIL_PASS'),
          },
        },
        defaults: {
          from: `"Your App" <${configService.get('MAIL_FROM')}>`,
        },
      }),
      inject: [ConfigService],
    }),
],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
