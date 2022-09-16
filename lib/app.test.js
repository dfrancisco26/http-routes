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

it('#GET will return candies objects', async () => {
  await request(app).get('/api/v1/candies')
  .expect(200);
});

it('#POST /candies will add new candies', async () => {
  const newCandy ={
    name: 'Take5',
    popular: false,
    rating: 5,
  };

  const res = await request(app).post('/api/v1/candies').send(newCandy);
  expect(res.status).toBe(200);
});

it('DELETE /candies deletes candy object', async () => {
  const deleteCandy = {
    name: 'Chocolate'
  };
  const res = await request(app).delete('/api/v1/candies').send(deleteCandy);
  expect(res.status).toBe(200);
});

it('#GET will return sauces objects', async () => {
  await request(app).get('/api/v1/sauces')
  .expect(200);
});

it('#POST /sauces will add new sauce', async () => {
  const newSauce ={
    name: 'Tomato',
    tasty: true,
    level: 'mid',
  };

  const res = await request(app).post('/api/v1/sauces').send(newSauce);
  expect(res.status).toBe(200);
});

it('DELETE /sauces deletes sauce object', async () => {
  const deleteSauce = {
    name: 'Hollandaise'
  };
  const res = await request(app).delete('/api/v1/sauces').send(deleteSauce);
  expect(res.status).toBe(200);
});
