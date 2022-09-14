const candies = [
  { name: 'Chocolate', popular: true, rating: 5 },
  { name: 'Fruit Gummy', popular: true, rating: 5 },
  { name: 'Licorice', popular: false, rating: 0 },
]

export default {
  get(req, res) {
    name: 'candies',
    res.statusCode = 200;
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    const newArr = [...candies, req.body];
    res.write(JSON.stringify(newArr));
    res.end();
  },
  put(req, res) {
    const updatedData = [...candies, req.body];
    res.write(JSON.stringify(updatedData));
    res.end();
  },
  delete(req, res) {
    res.statusCode = 400;
    res.write('Why would you do that?');
    res.end();
  }
};
