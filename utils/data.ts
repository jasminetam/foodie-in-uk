import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Jasmine',
      email: 'jasminetam94@gmail.com',
      password: bcrypt.hashSync('jasjas'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  posts: [
    {
      postName: 'Sushi in Holborn',
      slug: 'sushi-in-holborn',
      category: 'Japanese',
      tag: 'Sushi',
      image: '/image/eat-tokyo.jpg',
      location: 'Holborn',
      spendPerPerson: 50,
      brand: 'Eat Tokyo',
      rating: 4.3,
      numLikes: 20,
      description: 'A very nice sushi restaurant in Holborn',
    },
    {
      postName: 'Amazing Lobster in Canary Wharf',
      slug: 'amazing-lobster-in-canary-wharf',
      category: 'Western',
      tag: 'Lobster',
      image: '/image/burger-and-lobster.jpg',
      location: 'Canary Wharf',
      spendPerPerson: 70,
      brand: 'Burger and Lobster',
      rating: 4.5,
      numLikes: 30,
      description:
        'If you like eating lobster, this is a restaurant that you must visit',
    },
    {
      postName:
        'Would like to have some remarkable steak with affordable price? Come and visit here',
      slug: 'eat-tokyo',
      category: 'Western',
      tag: 'steak',
      image: '/image/flat-iron.jpg',
      location: 'Covent Garden',
      spendPerPerson: 30,
      brand: 'Flat Iron',
      rating: 4.8,
      numLikes: 15,
      description:
        'A tasty and affordable steak house located in Covent Garden.',
    },
  ],
  recipes: [
    {
      recipeName: 'Eggplant Pork Cheese Katsu',
      slug: 'egg-plant-pork-cheese-katsu',
      category: 'Japanese',
      tag: 'egg-plant',
      image: '/image/egg-plant.jpg',
      cookingStyle: 'katsu',
      budget: 10,
      numLikes: 30,
      materials: [
        {
          name: 'egg plant',
          amount: '5pcs',
        },
        {
          name: 'Pork belly',
          amount: '10 pcs (140g)',
        },
        {
          name: 'Miso',
          amount: '1 tbsp',
        },
        {
          name: 'Sliced cheese (melting type)',
          amount: '5 pieces',
        },
        {
          name: 'flour',
          amount: '2 tablespoons',
        },
        {
          name: 'egg',
          amount: '1 pcs',
        },
        {
          name: 'Bread crumbs',
          amount: '200g',
        },
        {
          name: 'Fried oil',
          amount: 'certain',
        },
      ],
      description:
        'crispy and toro umana cutlet?? While there is volume, it is a cutlet that can take vegetables properly!',
      steps: [
        'Drop the eggplant spatula, peel it vertically with 3 ~ 4 peelers and cut it vertically 1/2 lengthwise.',
        'In the eggplant cut into 1/2 cuts, leave 2 ~ 3 cm on the top and make an incision from the bottom.',
        'Thin and slimy miso on the cut surface.',
        'Sandwich the pork and sliced cheese in 1/2 cuts.',
        'Add flour→egg liquid → breadcrumbs.',
        'In a frying pan heat the oil enough to hide half of the eggplant and fry it.',
        'Turn it over in the middle and fry it until it is double-sided fox-colored.',
      ],
    },
    {
      recipeName: 'Pineapple cake',
      slug: 'pineapple-cake',
      category: 'Japanese',
      tag: 'pineapple',
      image: '/image/pineapple-cake.jpg',
      cookingStyle: 'bake',
      budget: 15,
      numLikes: 40,
      materials: [
        {
          name: '☆Hot Cake Mix',
          amount: '200g',
        },
        {
          name: '☆Milk',
          amount: '100cc',
        },
        {
          name: '☆Eggs',
          amount: '2 pcs',
        },
        {
          name: '☆Sugar',
          amount: '30g',
        },
        {
          name: '☆Lemon juice',
          amount: '1 tbsp',
        },
        {
          name: 'butter',
          amount: '20g',
        },
        {
          name: 'Sugar',
          amount: '30g',
        },
        {
          name: 'Canned slices of pineapple',
          amount: '6 pieces',
        },
      ],
      description:
        'Baking time in the oven 35 minutes → frying pan 15 minutes. In addition, since we used a hotcake mix, we can save a lot of time with dough just by mixing.',
      steps: [
        '☆ Mix all the ingredients and prepare the dough.',
        'In a frying pan we put the butter and sprinkle with sugar. It doesnt have to be uniform.',
        'Line up the pineapples.',
        'Pour in the dough of 1, cover with an ultra-fine fire and bake. After about 10 minutes, check whether the surface is dry. If the surface is dry and nothing sticks to the bamboo skewers, it is baked.',
        'The baking time is about 10 ~ 15 minutes. When it is baked, apply the plate to the frying pan in the same way as you put the lid on the pan and drop it on the plate as it is. I used a 20 cm frying pan.',
      ],
    },
    {
      recipeName: 'Stamina Semi-Ripe Taste Egg',
      slug: 'stamina-semi-ripe-taste-egg',
      category: 'Japanese',
      tag: 'egg',
      image: '/image/taste-egg.jpg',
      cookingStyle: 'boiled',
      budget: 5,
      numLikes: 20,
      materials: [
        {
          name: 'egg',
          amount: '2pcs',
        },
        {
          name: 'noodle soup',
          amount: 'The degree to which the egg will soak',
        },
        {
          name: 'grated garlic',
          amount: 'Half a teaspoon',
        },
        {
          name: 'grated ginger',
          amount: 'Half a teaspoon',
        },
      ],
      description: 'It goes well with rice with a firm and thick seasoning.',
      steps: [
        'Remove the eggs from the refrigerator, put the water in a saucepan and bring to a boil.',
        'Crack in the buttocks of the egg.',
        'Put the eggs in boiling water and wait for 6 minutes and 30 seconds.',
        'While discarding the hot water in the pot, I put water from the faucet at once.',
        'After cooling under running water for about 2 minutes, peel off the shell in running water.',
        'In a bowl put the noodle soup, grated garlic and grated ginger, mix and add the eggs.',
        "Soak it overnight and you're done.",
      ],
    },
  ],
};

export default data;
