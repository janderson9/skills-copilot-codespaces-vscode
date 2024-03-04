// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create the comments array
let comments = [
  {
    id: 1,
    username: 'alice',
    comment: 'I love your blog!',
  },
  {
    id: 2,
    username: 'bob',
    comment: 'Good job',
  },
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
  }
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
