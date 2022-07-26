import Post from '../../models/Post';
import Recipe from '../../models/Recipe';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req: any, res: any) => {
  await db.connect();
  await Post.deleteMany();
  await Post.insertMany(data.posts);
  await Recipe.deleteMany();
  await Recipe.insertMany(data.recipes);
  res.send({ message: 'seeded sucessfully' });
};

export default handler;
