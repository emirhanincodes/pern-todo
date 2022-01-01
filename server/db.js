const Pool = require('pg').Pool;

const pool = new Pool({
    host:'localhost',
    user:'emirhanselamet',
    password:'es3562147890',
    database:'postgredeneme',
    port:'5433'
});

module.exports= pool;
