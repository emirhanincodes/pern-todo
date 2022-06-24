const Pool = require('pg').Pool;

const pool = new Pool({
    host:'localhost',
    user:'',
    password:'',
    database:'',
    port:'5433'
});

module.exports= pool;
