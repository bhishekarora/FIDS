const fs = require('fs');
const baseUrl = "http://localhost:8080/files/";
const uploadFile = require("../middleware/upload");
const upload = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload an Ad !" });
    }

  
    res.status(200).send({
      message: "Uploaded the Ad successfully:" + req.file.originalname,
      
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the Ad: ${req.file.originalname}. ${err}`,
    });
  }
};



const getListFiles = (req, res) => {
  const directoryPath = __basedir + "\\app\\data\\uploads";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });
    res.status(200).send(fileInfos);
  });
};

module.exports = {
    upload,getListFiles
  
  };
