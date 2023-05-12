require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const PORT = 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET;

// SECRET = aete5g35754b45y
// CLOUD_NAME = sarveshsdata
// CLOUD_KEY=689875948924268
// CLOUD_SECRET=0ZRkjc3DF9VbKRlFLsDiBwjs8Rw

// const UPLOAD_PRESET = process.env.UPLOAD_PRESET || "ml_default";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
  cloudinary,
  // UPLOAD_PRESET,
};
