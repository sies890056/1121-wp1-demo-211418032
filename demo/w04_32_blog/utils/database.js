const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "a0977265833",
  database: "wp1_demo_32",
});

 //console.log('connect database',pool.options);

const testDB = async () => {
  try {
    const results = await pool.query(`select * from card_32`);
    console.log('jason data', results.rows);
  } catch (error) {
    console.log(error);
  }
};

testDB();


module.exports = pool;
