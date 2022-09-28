const express = require("express");
const route = require("./routes/route");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());



mongoose.connect("mongodb+srv://Jyoti273-db:djukOqR9QbI5Itvc@cluster0.nzuylps.mongodb.net/Project-3_Book-Management-db", {
  useNewUrlParser: true
})
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));



app.use("/", route);




app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});








