const db = require('../config/db');

module.exports = {
	indexModel:(body,callback)=>{
		db.query('   query    ',callback);
	}
}