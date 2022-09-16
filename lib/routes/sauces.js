const sauces = [{ name: 'bechamel', tasty: true, level: 'top' }, { name: 'veloute', tasty: true, level: 'mid' }, { name: 'hollandaise', tasty: false, level: 'top' }];

export default {
  get(req, res) {
    res.write(JSON.stringify(sauces));
    res.end();
  },
  post(req, res) {
    const newArr = [...sauces, req.body];
    res.write(JSON.stringify(newArr));
    res.end();
  },
  put(req, res) {
    const updatedData = sauces[sauces.findIndex((sauce) => sauce.name === req.body.name)];
    updatedData.name = req.body.newName;
    res.write(JSON.stringify(sauces));
    res.end();
  },
  delete(req, res) {
    const deleteSauce = sauces[sauces.findIndex((sauce) => sauce.name === req.body.name)];
    sauces.splice(deleteSauce, 1);
    res.write('You have dumped the sauce, cheffy.');
    res.write(JSON.stringify(sauces));
    res.end();
  }
  }

