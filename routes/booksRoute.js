const express = require("express");
const {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");

const router = express.Router();

router.route("/").post(createBook).get(getAllBooks);
router.route("/:_id").get(getSingleBook).put(updateBook).delete(deleteBook);

module.exports = router;
