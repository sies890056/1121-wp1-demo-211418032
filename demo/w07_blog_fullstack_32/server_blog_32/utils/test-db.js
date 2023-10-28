const db = require('./database');


const testDB =async()=>{
try{
const results =  await db.query(`select *from card_24`);
console.log('json data',results.rows);
}catch(error){
    console.log(error);
}
}
testDB();

module.exports=testDB;