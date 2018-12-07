// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  //local host
  connection = mysql.createConnection({
    port: 3306,
    host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "uhr08pt2f0qkx7g0",
    password: "fw50q361lz44g0v5",
    database: "v0w4fhgr1qcdjijr"
  });
};
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  
  // Export connection for our ORM to use.
  module.exports = connection;