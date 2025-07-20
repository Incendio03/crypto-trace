import List from "../models/list.js";

const getList = async (req, res) => {
  try {
    const lists = await List.find({});

    res.status(200).json({
      success: true,
      count: lists.length,
      data: lists,
    });
  } catch (error) {
    console.error(`Error fetching lists: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Failed to fetch lists",
    });
  }
};

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

const updateList = async (req, res) => {
  try {
    const updatedlist = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedlist) {
      return res.status(400).json({
        success: false,
        message: "List not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update list",
    });
  }
};

const deleteList = async (req, res) => {
  const deletedList = await List.findByIdAndDelete(req.params.id);

  try {
    if (!deletedList) {
      return res.status(404).json({
        success: false,
        message: "List not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "List deleted successfully",
      id: req.params.id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete list",
    });
  }
};

export { getList, createList, updateList, deleteList };
