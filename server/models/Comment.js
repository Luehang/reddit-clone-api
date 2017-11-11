const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = require('bluebird');

const commentSchema = new Schema({
  text: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  _post: { type: Schema.ObjectId, ref: 'Post' }
});

const autoPopulateCreator = function(next) {
  this.populate({
    path: '_creator',
    select: 'username created -_id'
  });
  next();
}

commentSchema.pre('find', autoPopulateCreator);

module.exports = mongoose.model('Comment', commentSchema);
