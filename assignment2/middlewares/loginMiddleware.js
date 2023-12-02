// authMiddleware.js

const requireAuthentication = (req, res, next) => {
    if (req.session.user) {
      console.log("User is logged in");
      return next();
    } else {
      console.log("redirecting to login");
      // res.locals.alertMessage = 'Please login to access this page';
      console.log(req.session.user);
      return res.redirect('/login.html'); // Redirect to the login page
    }
  };
  
  module.exports = {
    requireAuthentication,
  };
