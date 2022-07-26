import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    postName: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    tag: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    spendPerPerson: { type: Number, required: true, default: 0 },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numLikes: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
