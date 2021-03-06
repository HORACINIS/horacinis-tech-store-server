const Laptop = require('./../../models/laptopModel');

exports.getLaptops = async (req, res) => {
  try {
    const objQuery = { ...req.query };
    const fieldsToExclude = ['page', 'fields', 'sort', 'limit'];
    fieldsToExclude.forEach(el => delete objQuery[el]);

    const laptops = await Laptop.find(objQuery);
    res
      .status(200)
      .json({
        status: 'success',
        results: laptops.length,
        data: { laptops }
      });
  } catch (err) {
    res
      .status(404)
      .json({
        status: 'fail',
        message: err
      });
  }
}

exports.getLaptopsById = async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params)
    res
      .status(200)
      .json({
        status: 'success',
        data: { laptop }
      });
  } catch (err) {
    res
      .status(404)
      .json({
        status: 'fail',
        message: err
      });
  }
}