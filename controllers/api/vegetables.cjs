// MODEL IMPORT
const VegetableModel = require("../../models/vegetable.cjs");

// EXPORTS
module.exports = {
  vegetableIndex,
  addNewVegetable,
};

/* 
// INDUCES
1. INDEX - vegetableIndex
2. NEW - createVegetable,
3. DELETE - deleteVegetable,
4. UPDATE - updateVegetable,
*/

// USE THESE IN ROUTES
// 1. All Vegetables (Index)
async function vegetableIndex(req, res) {
  try {
    const vegetablesFetch = await VegetableModel.find({})
      .sort("sortOrder")
      .exec();
    res.status(200).json(vegetablesFetch);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
}
// 2. New Vegetable (New)
async function addNewVegetable(req, res) {
  try {
    // CREATE vegetable and add to DB
    const vegetableCreate = await VegetableModel.create(req.body);
    res.status(200).json(vegetableCreate);
  } catch (error) {
    console.log(error);
    // Client will check for non-2xx status code
    // 400 = Bad Request
    // 300 = Just not sending again
    res.status(400).json({ msg: error.message });
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
