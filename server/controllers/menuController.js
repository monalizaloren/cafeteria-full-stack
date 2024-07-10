const MenuItem = require('../models/menuItem');

exports.createItem = async (req, res) => {
  const newItem = new MenuItem(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

exports.getAllItems = async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
};

exports.updateItem = async (req, res) => {
  const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
};

