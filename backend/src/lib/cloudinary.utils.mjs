import { v2 as cloudinary } from 'cloudinary';


export const uploadFile = async (file, folderName) => {
  try {
    const options = {
      folder: folderName,
      resource_type: 'auto',
      allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
    };

    const result = await cloudinary.uploader.upload(file, options);
    return result;
    
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    throw new Error("File upload failed");
  }
};
