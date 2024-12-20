import express from 'express';
import bodyParser from 'body-parser';
import httpClient from './libs/http-client.js';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
  }),
);
app.get('/', (req, res) => {
  res.json({
    ok: 'ok',
  });
});

/*
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Star Wars',
    year: 1977,
  }),
});
*/
/*GET fetch*/
app.post('/movie', async (req, res) => {
  console.log(req.body);
  await httpClient.post('/movies', req.body);

  res.json(req.body);
});
/*GET axios*/

app.listen(5497, () => {
  console.log('toto');
});

/*
fetch('http://127.0.0.1:5497/movie', {
  method: 'POST',
  headers: {
    contentType: 'application/json',
  },
  body: JSON.stringify({
    title: 'demo',
  }),
});
*/
