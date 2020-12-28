const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/** Criação de banco de dados */
// con.query("CREATE DATABASE mydb", (err, result) => {
//   if(err) throw err;
//   console.log(result);

// })

/** Criação de uma tabela */
// let sql = "CREATE TABLE costumers (name VARCHAR(255), address VARCHAR(255))";
// con.query(sql, (err, result)=>{
//   if(err) throw err;
//   console.log(result);
// })

/** Inserção de dados */
// let sql = "INSERT INTO costumers (name, address) VALUES ('Emerson','Rua da Aleluia')";
// con.query(sql, (err, result)=>{
//   if(err) throw err;
//   console.log(result);
// con.end( err => console.log)
// })

/** Select de dados */
// let sql = "SELECT * FROM costumers";
// con.query(sql, (err, result, fields)=>{
//   if(err) throw err;
//   console.log(JSON.stringify(result));
//   con.end( err => console.log)
// })

/** Deleting data */
// let sql = "DELETE FROM costumers WHERE name = 'Emerson'";
// con.query(sql, (err, result)=>{
//   if(err) throw err;
//   console.log(result);
//   con.end( err => console.log);
// })
