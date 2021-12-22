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
  const vorhanden = await db.query('SELECT max(rennnummer) from rennen');
  const maxRn = vorhanden.rows[0].max + 1;
  const { rows } = await db.query(
    `INSERT INTO rennen (rennnummer, land, ort, datum, uhrzeit, geschlecht) 
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
    [maxRn, land, ort, datum, uhrzeit, geschlecht],
  );
  return rows;
};

const changeTime = async (rid, newTime) => {
  const { rows } = await db.query('UPDATE rennen SET uhrzeit = $1 WHERE rennnummer = $2', [newTime, rid]);
  return rows;
};

module.exports = {
  getFahrer,
  getRennen,
  getRen,
  delRennen,
  postRennen,
  changeTime,
};
