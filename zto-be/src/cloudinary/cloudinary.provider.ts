import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return v2.config({
      // cloud_name: process.env.CLD_CLOUD_NAME,
      // api_key: process.env.CLD_API_KEY,
      // api_secret: process.env.CLD_API_SECRET,
      cloud_name: 'dezjfugcm',
      api_key: '342522245393294',
      api_secret: '6DEbhIsGDNqI26bmzvJxNZkoP0A',
    });
  },
};
