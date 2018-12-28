import express from 'express';

const app = express();
const port = 3000;
app.use('/', (req, res) => {
  res.send('Hello Lupe');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
