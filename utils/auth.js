// checks for login status before access
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

// Exports withAuth
module.exports = withAuth;
