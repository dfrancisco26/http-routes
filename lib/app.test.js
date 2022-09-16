import request from 'supertest';
import app from '../app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('#GET will return cat objects', async () => {
  await request(app).get('/api/v1/cats')
  .expect(200);
});

it('#POST /cats will add new cat', async () => {
  const newCat ={
    name: 'Linus',
    color: 'striped',
    fat: false,
  };

  const res = await request(app).post('/api/v1/cats').send(newCat);
  expect(res.status).toBe(200);
});

it('DELETE /cats deletes cat object', async () => {
  const deleteCat = {
    name: 'Alvin'
  };
  const res = await request(app).delete('/api/v1/cats').send(deleteCat);
  expect(res.status).toBe(200);
});