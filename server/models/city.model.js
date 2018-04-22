import mongoose from 'mongoose';

const cityModel = new mongoose.Schema({
  name: String,
  bannerImg: String,
  description: String,
  scams: [
    {
      title: String,
      description: String,
      position: String,
      previewImg: String,
    },
  ],
}, { minimize: false });

const cityRepo = mongoose.model('city', cityModel);
export default cityRepo;
