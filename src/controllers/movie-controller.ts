import { Request, Response } from 'express';
import httpClient, { url } from '../../libs/http-client';

export const helloWorld = (req: Request, res: Response) => {
  res.json({
    ok: 'pas ok',
  });
};

export const createMovie2 = (req: Request, res: Response) => {
  const body = req.body;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(() => {
    res.json({ ok: 'ok' });
  });
};

export const createMovie = async (req: Request, res: Response) => {
  console.log(req.body);
  await httpClient.post('/movies', req.body);

  res.json(req.body);
};

export const getMovie = (req: Request, res: Response) => {
  httpClient.get('/movies').then((results) => {
    console.log(results);
    res.json(results.data);
  });
};
