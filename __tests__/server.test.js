const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server', () => {
  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello World');
  });

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toBe(404);

  });

  it('handles root path', async () => {
    const response = await request.get('/bad');

    expect(response.status).toBe(500);

    expect(response.body.route).toEqual('/bad');
  });

});
