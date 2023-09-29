const Vegetable = require("../../models/vegetable.cjs");

// EXPORTS
// module.exports = {
//   createVegetable,
//   deleteVegetable,
//   updateVegetable,
// };

// CREATE VEGETABLE FUNCTION
// TAKES req, res BECAUSE IT'S A CONTROLLER FUNCTION
// Like router.get or app.get
// TODO: GET RID OF TOKEN STUFF, UPDATE WITH WHAT I NEED FROM vegetableSchema
async function createVegetable(req, res) {
  try {
    // CREATE user and add to DB
    const vegetable = await Vegetable.create(req.body);
    // TOKEN will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

// DELETE VEGETABLE FUNCTION
// TODO: GET RID OF TOKEN STUFF, UPDATE WITH WHAT I NEED FROM vegetableSchema
async function deleteVegetable(req, res) {
  try {
    console.log(req.body.email);
    await User.findOneAndDelete({ email: req.body.email });
    res.json("Vegetable Deleted");
  } catch (error) {
    res.status(400).json("Invalid Credentials");
  }
}

// UPDATE VEGETABLE FUNCTION
// TODO: GET RID OF TOKEN STUFF, UPDATE WITH WHAT I NEED FROM vegetableSchema
async function updateVegetable(req, res) {
  try {
    console.log(req.body.name);
    const user = await Vegetable.findByIdAndUpdate(
      req.body.id,
      { name: req.body.name },
      { new: true }
    );
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json("Invalid Credentials");
  }
}
