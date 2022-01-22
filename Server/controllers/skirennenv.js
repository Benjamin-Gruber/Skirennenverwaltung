const asyncHandler = require('express-async-handler');
const model = require('../model/skirennenv');

const getFahrer = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getFahrer(req.params.rennen_nummer));
});

const getRennen = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getRennen());
});

const getRen = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getRen(req.params.rennnummer));
});

const delRennen = asyncHandler(async (req, res) => {
  const { rennnummer } = req.params;
  const rows = await model.getRen(rennnummer);
  if (rows.length === 0) res.status(404).send(`Race ${rennnummer} does not exist.`);
  else {
    model.delRennen(rennnummer);
    res.status(200).send(`Race ${rennnummer} has been delted.`);
  }
});

const postRennen = asyncHandler(async (req, res) => {
  const { land, ort, datum, uhrzeit, geschlecht } = req.body;
  console.log('post:', ort, uhrzeit);
  if (!land || !ort || !datum || !uhrzeit || !geschlecht) {
    res.status(400).send('One or more properties missing: land, ort, datum, uhrzeit, geschlecht');
    return;
  }
  let tempbole = false;
  const rows = await model.getRennen();
  for (const check of rows) {
    const tempuhr = check.uhrzeit.slice(0, 5);
    if (check.ort === ort && tempuhr === uhrzeit) {
      tempbole = true;
    }
  }
  if (tempbole) {
    res.status(500).send('Rennen already exists');
  } else {
    res.status(201).json(await model.postRennen(req.body));
  }
});

const changeTime = asyncHandler(async (req, res) => {
  const { uhrzeit } = req.body;
  const { rennnummer } = req.params;
  const rows = await model.getRen(rennnummer);
  if (rows.length === 0) res.status(404).send(`Race ${rennnummer} does not exist`);
  else {
    model.changeTime(rennnummer, uhrzeit);
    res.status(200).send(`Race ${rennnummer} has been postponed`);
  }
});

module.exports = {
  getFahrer,
  getRennen,
  getRen,
  delRennen,
  postRennen,
  changeTime,
};
