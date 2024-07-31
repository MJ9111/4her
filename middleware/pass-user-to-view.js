const passUserToView = (req, res, next) => {
  res.locals.user = req.session.user ? req.session.user : null
  next()
}

module.exports = passUserToView



/**
req :is the request object.
res :is the response object.
next:is the third parameter, representing the next function in the long line of middleware and route handlers that a request is processed through.
*/