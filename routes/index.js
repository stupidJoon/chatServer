const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat', (req, res) => {
  res.sendFile('chat.html', { root: path.join(__dirname, '../public/html') });
});

module.exports = router;
