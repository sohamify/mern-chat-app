import multer from 'multer';

export const upload = multer({
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB
  }
});

