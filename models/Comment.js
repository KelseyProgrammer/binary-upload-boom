const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    rrequired: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
  
module.exports = mongoose.models.Comment || mongoose.model("Comment", CommentSchema);