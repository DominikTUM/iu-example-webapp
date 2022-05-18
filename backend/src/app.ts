import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/random-number', (req, res) => {
    res.send(JSON.stringify({number: Math.random()}));
});

app.post('/feed-me', (req, res) => {

    console.log(JSON.stringify(req.body));
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

