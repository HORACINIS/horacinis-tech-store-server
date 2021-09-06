const Phone = require('./../../models/phoneModel');

exports.getPhones = async (req, res) => {
  const objQuery = { ...req.query };
  const excludedFields = ['fields', 'sort', 'page', 'limit'];
  excludedFields.forEach(el => delete objQuery[el]);

  try {
    const phones = await Phone.find(objQuery);
    res
      .status(200)
      .json({
        stats: 'success',
        results: phones.length,
        data: { phones }
      })
  } catch (err) {
    console.log(err)
    res
      .status(404)
      .json({
        status: 'fail',
        message: err
      });
  }
}

exports.getPhonesById = async (req, res) => {
  try {
    const phones = await Phone.findById(req.params)
    res
      .status(200)
      .json({
        status: 'success',
        data: { phones }
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