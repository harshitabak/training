const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publiserController=require("../controllers/publiserController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createNewAuthor", authorController.createNewAuthor  )
router.post("/createPubliser", publiserController.createPubliser  )
router.get("/getAuthorsData", authorController.getAuthorsData)
router.post("/createNewBook", bookController.createNewBook  )
router.get("/getBooksData", bookController.getBooksData)
router.get("/getBooksWithAuthorAndPubliser", bookController.getBooksWithAuthorAndPubliser)

module.exports = router;