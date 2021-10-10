const mongoose = require('mongoose');

const tabletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name is required'],
    unique: [true, 'Names must be unique'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'A category is required'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'You have to add an image']
  },
  price: {
    type: Number,
    required: [true, 'A prices is required']
  },
  brand: {
    type: String,
    required: [true, 'A brand is required'],
    trim: true
  },
  rating: {
    type: Number,
    required: [true, 'A rating is required']
  },
  numReviews: {
    type: Number,
    required: [true, 'A number of reviews is required']
  },
  description: {
    type: String,
    trim: true
  },
  moreImages: [String]
});

const Tablet = mongoose.model('Tablet', tabletSchema);

module.exports = Tablet;