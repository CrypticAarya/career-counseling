const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  college: {
    type: String,
    required: [true, 'Please add a college'],
    enum: [
      'VJTI', 
      'Lal Bahadur Shastri College of Maritime Engineering, Mumbai', 
      'Orchid College', 
      'Vedam', 
      'Scaler', 
      'Polaris', 
      'MIT', 
      'Terna College', 
      'DY Patil Pimpri Chinchwad'
    ]
  },
  expertise: {
    type: [String],
    required: true
  },
  skills: [String],
  experience: String,
  linkedin: String,
  imageUrl: String,
  rating: {
    type: Number,
    default: 0
  },
  availabilityStatus: {
    type: String,
    enum: ['available', 'busy', 'offline'],
    default: 'available'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Mentor', mentorSchema);
