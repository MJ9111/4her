const isSignedIn = (req, res, next) => {
  if (req.session.user) return next();
  res.redirect('/auth/sign-in');
};

module.exports = isSignedIn;




/**
req :is the request object.
res :is the response object.
next:is the third parameter, representing the next function in the long line of middleware and route handlers that a request is processed through.
*/