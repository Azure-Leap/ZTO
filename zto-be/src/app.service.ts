import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  // class MulterConfigService implements MulterOptionsFactory {
  //   createMulterOptions(): MulterModuleOptions {
  //     return {
  //       dest: './upload',
  //     };
  //   }
  // }
}
