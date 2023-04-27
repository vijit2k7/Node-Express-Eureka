const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/home', (req,res) => {
  res.send("ok")
});

module.exports = router;

