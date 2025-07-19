import List from "../models/list.js";

const createList = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newList = await List.create({
      title,
      description,
    });

    res.status(200).json({
      success: true,
      data: newList,
    });
  } catch (error) {
    console.error(`Error creating list: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Failed to create list",
    });
  }
};

export { createList };
