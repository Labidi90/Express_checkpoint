const express = require("express");
const app = express();
const path = require("path");
const filter = require("./middleware/filter");
const PORT = 5000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "pages", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "pages", "about.html"));
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "pages", "contact.html"));
// });

app.use(filter);

app.use(express.static(path.join(__dirname, "pages")));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
