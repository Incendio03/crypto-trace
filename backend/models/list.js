import mongoose from "mongoose";

const listSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const List = mongoose.model("List", listSchema);

export default List;
