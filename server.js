const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'wheel-of-fortune.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});