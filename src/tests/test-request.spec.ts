import httpClient from '../../libs/http-client';
import * as allure from 'allure-js-commons';

describe('groupe de test', () => {
  it('axios then', (done) => {
    allure.description('test axios then');
    allure.parameter('url', 'http://localhost:3000/movies');
    allure.parameter('method', 'POST');
    allure.parameter('body', JSON.stringify({ title: 'test', year: 2021 }));

    httpClient
      .post('/movies', {
        title: 'test',
        year: 2021,
      })
      .then((response) => {
        allure.story(JSON.stringify(response.data));
        expect(response.data.title).toBe('test');
        done();
      })
      .catch((error) => {
        allure.story(JSON.stringify(error));
      });

    console.log('ok');
  });

  it('axios await', async () => {
    allure.description('test axios then');
    allure.parameter('url', 'http://localhost:3000/movies');
    allure.parameter('method', 'POST');
    allure.parameter('body', JSON.stringify({ title: 'test', year: 2021 }));

    const response = await httpClient.post('/movies', {
      title: 'test',
      year: 2021,
    });
    allure.logStep('response', response.data);

    console.log(response.data);
    expect(response.data.year).toBe(2021);

    console.log('ok');
  });
});
