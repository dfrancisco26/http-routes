const cats = [{ name: 'Bojangles', color: 'black', fat: false }, { name: 'Alvin', color: 'orange', fat: true }];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {
    const newArr = [...cats, req.body];
    res.write(JSON.stringify(newArr));
    res.end();
  },
  put(req, res) {
    const updatedData = [...cats, req.body];
    res.write(JSON.stringify(updatedData));
    res.end();
  },
  delete(req, res) {
    res.statusCode = 400;
    res.write('These are not your cats, sir.');
    res.end();
  }
};
