const Tablet = require('./../../models/tabletModel');

exports.getTablets = async (req, res) => {
  const objQuery = { ...req.query };
  const excludedFields = ['fields', 'sort', 'page', 'limit'];
  excludedFields.forEach(el => delete objQuery[el]);

  try {
    const tablets = await Tablet.find(objQuery);
    res
      .status(200)
      .json({
        stats: 'success',
        results: tablets.length,
        data: { tablets }
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

exports.getTabletsById = async (req, res) => {
  try {
    const tablets = await Tablet.findById(req.params)
    res
      .status(200)
      .json({
        status: 'success',
        data: { tablets }
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