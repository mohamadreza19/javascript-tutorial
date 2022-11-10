const { validatePost } = require("../config/secure/psot");
const ContentModel = require("../model/index");
exports.handleGetContent = async (req, res) => {
  const model = await ContentModel.find({});

  res.status(200).json(model);
};

exports.handleCreatePost = async (req, res) => {
  const { title, auther, categories, body, shortdescription } = req.body;

  var statusCode;
  try {
    const validatedPsot = await validatePost({
      title,
      body,
      shortDescription: shortdescription,
    });

    if (validatedPsot !== true) {
      statusCode = 403;
      throw validatedPsot;
    }
    const categoriesModel = await ContentModel.findOne({
      categories: {
        $all: [categories],
      },
    });

    const model = await ContentModel.create({
      title,
      categories: [categories, categoriesModel.categories[1]],
      body,
      shortDescription: shortdescription,
    });
    console.log(model);
    res.status(200).json({ message: "created succes" });
  } catch (error) {
    res.status(statusCode || 400).json({ details: error });
  }
};
