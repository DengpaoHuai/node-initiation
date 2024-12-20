import httpClient from '../../libs/http-client';
import * as allure from 'allure-js-commons';
import httpWoofWoof from '../../libs/http-woofwoof';

describe('woofwoof group', () => {
  it('woaf', async () => {
    allure.description('test waf');

    const response = await httpWoofWoof.get('/woof.json');
    expect(response.data.url).toContain('https://');

    const image = await httpWoofWoof.get(response.data.url, {
      responseType: 'arraybuffer',
    });
    expect(image.status).toBe(200);
    const buffer = Buffer.from(image.data, 'binary');

    allure.attachment('image', buffer, 'image/png');
  });
});
