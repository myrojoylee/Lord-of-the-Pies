const router = require("express").Router();
const { User } = require("../../models");

//TO DO: post route to create a new user
router.post('/profile', async (req, res) => {
  try {
    const userData = await User.create(req.body)
   
      // Specify attributes so that we can render user name on the page
      
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//TO DO: post route to create a new session for user with login

//TO DO: post route to end session with logout

module.exports = router;
