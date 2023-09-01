// const cloudinary = require('cloudinary').v2;
import cloudinary from 'cloudinary';
const apiSecret = process.env.CLOUDINARY_API_SECRET;

// Server-side function used to sign an upload with a couple of
// example eager transformations included in the request.
const signuploadform = async (req,res) => {
  const timestamp = Math.round((new Date).getTime()/1000);

  const signature = cloudinary.v2.utils.api_sign_request({
    timestamp: timestamp,
    eager: 'c_pad,h_300,w_400|c_crop,h_200,w_260',
    folder: 'signed_upload_demo_form'}, apiSecret);

//   return { timestamp, signature }
  res.status(200).json({timestamp, signature});
}

export default signuploadform;