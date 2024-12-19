import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

export function FileUpload() {
  return FileInterceptor('file', {
    storage: diskStorage({
      destination: '.uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtName = file.originalname.split('.')[1];
        cb(null, `${uniqueSuffix}.${fileExtName}`);
      },
    }),
  });
}
