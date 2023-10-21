const db = require('./database');

const testDB = async () => {
    try {
        const results = await db.query(`select * from card_32`);
        console.log('json data', results);
    } catch (error) {
        console.log(error);
    }
}

testDB();

module.exports = testDB;
