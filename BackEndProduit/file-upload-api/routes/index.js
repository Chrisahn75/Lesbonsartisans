const express = require('express');
const router = express.Router();
const mv = require('mv');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Application d\'upload'});
});

router.post('/upload', (req, res, next) => {
  let fileUpload = req.files.file;
  if (fileUpload.length == 0) {
    return res.status(400).send('Pas de fichiers!');
  }
  console.log(fileUpload);
  fileUpload.mv('./public/upload/TextTrackList.jpg', (err)=> {
    if(err) {
      return res.status(500).send(err);
    } else {
      res.send("uploadé!")
    }
  });
})

module.exports = router;