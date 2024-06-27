const foodModel = require('../models/foodModel');

const postFood  = async (foodData) => {
  const food = new foodModel(foodData);
  await food.save();
  return food;
};

const getFoodId  = async (id) => {
  return await foodModel.findById(id);
};

const getFood  = async ()=>{
  return await foodModel.find();
}

const updateFood  = async (id, foodData) =>{
  return await foodModel.findByIdAndUpdate(id, foodData, {new:true});
}

const deleteFoodId  = async (id) => {
  return await foodModel.findByIdAndDelete(id);
}

module.exports = {
  postFood,
  getFoodId,
  getFood,
  updateFood,
  deleteFoodId
};