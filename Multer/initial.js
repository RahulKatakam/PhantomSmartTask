const express = require("express")
const multer = require("multer")

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const uploadStorage = multer({ storage: storage })

// body -> form data in Postman with key name as 'file'

// Single file
app.post("/upload/single", uploadStorage.single("file"), (req, res) => {
  console.log(req.file)
  return res.send("Single file")
})
//Multiple files
app.post("/upload/multiple", uploadStorage.array("file", 10), (req, res) => {
  console.log(req.files)
  return res.send("Multiple files")
})

app.listen(3000, () => {
  console.log("Server listening on 3000")
})
