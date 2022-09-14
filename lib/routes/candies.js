const candies = [
  { name: 'Chocolate', popular: true, rating: 5 },
  { name: 'Fruit Gummy', popular: true, rating: 5 },
  { name: 'Licorice', popular: false, rating: 0 },
]

export default {
  get(req, res) {
    name: 'candies',
    res.write(JSON.stringify(candies));
    res.end();
  },
  // post(req, res) {},
};
