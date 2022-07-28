import Post from 'models/Post';
import Recipe from 'models/Recipe';
import User from 'models/User';
import data from 'utils/data';
import db from 'utils/db';

const handler = async (req: any, res: any) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Post.deleteMany();
  await Post.insertMany(data.posts);
  await Recipe.deleteMany();
  await Recipe.insertMany(data.recipes);
  await db.disconnect();
  res.send({ message: 'seeded sucessfully' });
};

export default handler;
