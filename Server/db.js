var mysql = require('mysql')

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'flowace'
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});


module.exports.executeQuery = function (sqlQuery) {

    return new Promise((resolve, reject) => {
        console.log(sqlQuery)
        conn.query(sqlQuery, (error, result, fields) => {

            if (error) {
                reject({
                    Error: "Error in executeQuery Execution"
                })
            } else {
                resolve(result)
            }

        });
    });

}


module.exports.executeQueryParam = function (sqlQuery, sqlQueryParam) {
    
    console.log(sqlQuery)

console.log(sqlQueryParam)
    
    return new Promise((resolve, reject) => {
        conn.query(sqlQuery, sqlQueryParam, (error, result, fields) => {

            if (error) {
                reject({
                    Error: "Error in executeQueryParam Execution"
                });
            } else {
                console.log("result************8",result)
                resolve(result);
            }

        });
    });

}