import {v2 as cloudinary} from 'cloudinary';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

 export default  uploadToCloudinary = async (path, folder = "waves-app") => {
    try {
      const data = await cloudinary.uploader.upload(path, { folder: folder });
       console.log(data);   
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

