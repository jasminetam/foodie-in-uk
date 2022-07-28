import bcryptjs from 'bcryptjs';
import User from 'models/User';
import db from 'utils/db';

async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return;
  }
  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 6
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await db.connect();

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: 'User has already existed' });
    return;
    }
    
    const newUser = new User({
        name,
        email,
        password: bcryptjs.hashSync(password),
        isAdmin: false
    })

    const user = await newUser.save()
    res.status(201).send({
        message: 'User created',
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    })
}

export default handler
