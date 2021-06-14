const Book = require("../models/bookSchema");

//adding a new Book
const createBook = async (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    isbn: req.body.isbn,
    genre: req.body.genre,
  });

  await newBook.save();
  res.status(201).json(newBook);
};
//get all Books
const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

//get a Book
const getSingleBook = async (req, res) => {
  const book = await Book.findById(req.params._id);
  res.json(book);
};

//update a Book
const updateBook = async (req, res) => {
  const foundBook = await Book.findById(req.params._id);
  if (foundBook) {
    (foundBook.title = req.body.title),
      (foundBook.author = req.body.author),
      (foundBook.year = req.body.year),
      (foundBook.isbn = req.body.isbn);
    foundBook.genre = req.body.genre;

    const updatedBook = await foundBook.save();
    res.json({ updatedBook: updatedBook });
  }
};

//delete a Book
const deleteBook = async (req, res) => {
  const foundBook = await Book.findById(req.params._id);
  if (foundBook) {
    foundBook.remove();
    res.json({ msg: `${foundBook.name} removed` });
  } else {
    res.status(404).json({ error: "Book not available" });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};