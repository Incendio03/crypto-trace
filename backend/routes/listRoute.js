import express from "express";
import {
  getList,
  createList,
  updateList,
  deleteList,
} from "../controllers/listController.js";

const router = express.Router();

router.route("/").get(getList).post(createList);
router.route("/:id").put(updateList).delete(deleteList);

export default router;
