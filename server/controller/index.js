const ContentModel = require("../model/index");
exports.handleGetContent = async (req, res) => {
  const model = await ContentModel.find({});
  res.status(200).json(model);
};

exports.handlePostContent = async (req, res) => {
  const { title, auther, categories, body } = req.body;

  try {
    const model = await ContentModel.create({
      title,
      auther,
      categories,
      body,
    });

    res.json({ message: "created succes" });
  } catch (error) {
    console.log(error);
  }
};
