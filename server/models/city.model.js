import mongoose from 'mongoose';

const cityModel = new mongoose.Schema({
  cityId: Number,
  name: String,
  bannerImg: String,
  description: String,
}, { minimize: false });

const cityRepo = mongoose.model('city', cityModel);
export default cityModel;
