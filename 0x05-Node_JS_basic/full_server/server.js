const express = require('express');
const routes = require('./controllers/routes');

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

export default app;
