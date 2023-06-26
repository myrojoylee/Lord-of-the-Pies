const router = require("express").Router();
const { User, Recipe, Comment } = require("../models");
const withAuth = require("../utils/auth");

// renders homepage
router.get("/", async (req, res) => {
  try {
    // TO DO: specify attributes so that we can
    // render recipe name, recipe detail
    const recipeName = await Recipe.findAll(
      {

      attributes: ['name', 'detail'],

      },
    );

    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// TO DO: create route for user profile.
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id,
    {
      attributes: {
        exclude: ['password']
      },
        include: [{ model: Recipe }]
    });

    const user = userData.get({plain: true})

    console.log(user)
    res.render('profile', {
      ...user,
      logged_in: true
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

// TO DO: create route for recipe by id.

// Specify attributes so that we can render
// receipt name, recipe detail, recipe author, recipe date, and associated comments

// TO DO: create route for login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password'});
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
// TO DO: create route to sign up
router.post('/signup', async (req, res) => {
// what do I do here lol
});
  


module.exports = router;
