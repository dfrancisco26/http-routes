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
    const updatedData = cats[cats.findIndex((cat) => cat.name === req.body.name)];
    updatedData.name = req.body.newName;
    res.write(JSON.stringify(cats));
    res.end();
  },

  // patch(req, res) {
  //   res.statusCode = 404;
  //   res.end();
  // },

  delete(req, res) {
    const deleteCat = cats[cats.findIndex((cat) => cat.name === req.body.name)];
    cats.splice(deleteCat, 1);
    res.write('You have evicted the cat, sir.');
    res.write(JSON.stringify(cats));
    res.end();
  }
  }

