import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
  createMovie,
  getMovie,
  helloWorld,
} from './src/controllers/movie-controller';
import { Worker } from 'worker_threads';

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
  }),
);
app.get('/', helloWorld);

app.post('/movie', createMovie);

app.get('/movies', getMovie);

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

const innnnnfiniteLoop = async () => {
  await waitFor(5000);
  for (let i = 0; i < 100000000000; i++) {
    console.log(i);
  }
};

app.get('/hello-world', async (req, res) => {
  await innnnnfiniteLoop();
  res.json({
    ok: 'ok',
  });
  const worker = new Worker('./worker.js');

  worker.on('message', (message) => {
    console.log(message);
    res.json({
      ok: 'ok',
    });
  });
  worker.postMessage('start');
});

app.get('/hello-world-2', (req, res) => {
  res.json({
    ok: 'ok',
  });
});

app.listen(5497, () => {
  console.log('toto');
});
