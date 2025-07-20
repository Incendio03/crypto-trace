import List from "../models/list.js";
import User from "../models/userModel.js";

const getList = async (req, res) => {
  try {
    const lists = await List.find({ user: req.user.id });

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
      user: req.user.id,
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
    // Find the list to check ownership
    const list = await List.findById(req.params.id);

    if (!list) {
      return res.status(404).json({
        success: false,
        message: "List not found",
      });
    }

    // Check if the logged-in user owns this list
    if (list.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
      });
    }

    // Update the list
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
  try {
    // Find the list to check ownership
    const list = await List.findById(req.params.id);

    if (!list) {
      return res.status(404).json({
        success: false,
        message: "List not found",
      });
    }

    // Check if the logged-in user owns this list
    if (list.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
      });
    }

    // Delete the list
    await List.findByIdAndDelete(req.params.id);

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
