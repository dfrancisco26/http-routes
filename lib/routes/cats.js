const cats = [{ name: 'Bojangles', color: 'black', fat: false }, { name: 'Alvin', color: 'orange', fat: true }];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {},
};
