const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/connectDb");
const booksRoute = require("./routes/booksRoute");
const cors = require("cors");

dotenv.config();

const app = express();

//connection
connectDb();

//middleware
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/books", booksRoute);

//home route
app.get("/", (req, res) => {
  res.send("<h1>welcome to my books Api</h1>");
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started on ${port}`));