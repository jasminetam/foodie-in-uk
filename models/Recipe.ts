import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema(
  {
    recipeName: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    tag: [{ type: String, required: true }],
    image: { type: String, required: true },
    cookingStyle: { type: String, required: true },
    budget: { type: Number, required: true, default: 0 },
    numLikes: { type: Number, required: true, default: 0 },
    materials: {
      type: [
        {
          name: { type: String, required: true },
          amount: { type: String, required: true },
        },
      ],
    },
    description: { type: String, required: true },
    steps: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    _id: false,
  }
);

const Recipe = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);

export default Recipe;
