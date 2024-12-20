import { Request, Response } from 'express';
import httpClient, { url } from '../../libs/http-client';
import { postData } from '../../services/post-data';

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

type Movie = {
  title: string;
};
export const createMovie = async (req: Request, res: Response) => {
  console.log(req.body);
  const response = await postData<Movie>(httpClient, req.body);
  res.json(response);
};

export const getMovie = (req: Request, res: Response) => {
  httpClient.get('/movies').then((results) => {
    console.log(results);
    res.json(results.data);
  });
};
