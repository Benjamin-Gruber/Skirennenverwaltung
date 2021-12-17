const db = require('../db');

const getFahrer = async () => {
  const { rows } = await db.query('SELECT * FROM fahrer');
  return rows;
};

async function getRennen() {
  const { rows } = await db.query('SELECT * FROM rennen');
  return rows;
}

async function getRen(rid) {
  const { rows } = await db.query('SELECT * FROM rennen WHERE rennnummer = $1', [rid]);
  return rows;
}

const delRennen = (rid) => db.query('DELETE FROM rennen WHERE rennnummer = $1', [rid]);

const postRennen = async ({ land, ort, datum, uhrzeit, geschlecht }) => {
  const { rows } = await db.query(
    `INSERT INTO rennen (land, ort, datum, uhrzeit, geschlecht) 
    VALUES($1, $2, $3, $4, $5)`,
    [land, ort, datum, uhrzeit, geschlecht],
  );
  return rows;
};

const changeTime = async (rid, newTime) => {
  const { rows } = await db.query('UPDATE rennen SET uhrzeit = $1 WHERE rennnummer = $2', [newTime, rid]);
  return rows;
};

const changeDate = async (rid, newDate) => {
  const { rows } = await db.query('UPDATE rennen SET datum = $1 WHERE rennnummer = $2', [newDate, rid]);
  return rows;
};

module.exports = {
  getFahrer,
  getRennen,
  getRen,
  delRennen,
  postRennen,
  changeTime,
  changeDate,
};
