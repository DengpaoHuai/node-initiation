import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
  createMovie,
  getMovie,
  helloWorld,
} from './src/controllers/movie-controller';

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

app.listen(5497, () => {
  console.log('toto');
});
