// MODEL IMPORT
const VegetableModel = require("../../models/vegetable.cjs");

// EXPORTS
module.exports = {
  vegetableIndex,
  addNewVegetable,
  getVegetableWithID,
  updateVegetableWithID,
  deleteVegetableWithID,
};

/* 
// INDUCES
1. INDEX - vegetableIndex
2. NEW - createVegetable,
3. DELETE - deleteVegetableWithID,
4. UPDATE - updateVegetableWithID,
9. SHOW - getVegetableWithID
*/

// USE THESE IN ROUTES
// 1. All Vegetables (I)
// GET METHOD
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
// 2. New Vegetable (N)
// addNewVegetable
// POST METHOD
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

// 3. Delete Vegetable (D)
// deleteVegetable
// DELETE METHOD
async function deleteVegetableWithID(req, res) {
  try {
    const vegetablesDeleteOne = await VegetableModel.findByIdAndDelete({
      _id: req.params.VegetableId,
    });
    res.status(200).json(vegetablesDeleteOne);
  } catch (error) {
    console.log(error);
    // Client will check for non-2xx status code
    // 400 = Bad Request
    // 300 = Just not sending again
    res.status(400).json({ msg: "Deleted vegetable successfully" });
  }
}

// 4. Update Vegetable (U)
// updateVegetable,
// PUT METHOD
// req.body passes the new data to the body
// new:true passes the updated data on to the DB
// MAY need findByIdAndUpdate
async function updateVegetableWithID(req, res) {
  try {
    const vegetablesUpdateOne = await VegetableModel.findOneAndUpdate(
      { _id: req.params.VegetableId },
      req.body,
      { new: true }
    );
    res.status(200).json(vegetablesUpdateOne);
  } catch (error) {
    console.log(error);
    // Client will check for non-2xx status code
    // 400 = Bad Request
    // 300 = Just not sending again
    res.status(400).json({ msg: error.message });
  }
}

// 9. Show Vegetable
// GET METHOD
async function getVegetableWithID(req, res) {
  try {
    const vegetablesFetchOne = await VegetableModel.findById(
      req.params.VegetableId
    );
    res.status(200).json(vegetablesFetchOne);
  } catch (error) {
    console.log(error);
    // Client will check for non-2xx status code
    // 400 = Bad Request
    // 300 = Just not sending again
    res.status(400).json({ msg: error.message });
  }
}
