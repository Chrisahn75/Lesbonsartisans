var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', (req, res, next) => {
  console.log('here')
  console.log(req );
  const fileName = req.files.file.name
  console.log('filename',fileName);
  
})

module.exports = router;