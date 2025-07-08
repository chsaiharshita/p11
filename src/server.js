const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
