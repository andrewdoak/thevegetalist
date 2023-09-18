// MULTIPLE CONTROLLERS, ONE FILE
// THAT MEANS WE NEED OBJECTS
module.exports = {
  create,
};
// TAKES req, res BECAUSE IT'S A CONTROLLER FUNCTION
// Like router.get or app.get
async function create(req, res) {
  // RESONDING TO THE REQUEST WITH JSON
  res.json({
    user: {
      name: req.body.name,
      email: req.body.email,
    },
  });
}

// This is also HOISTING from way back
