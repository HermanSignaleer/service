const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'remotemysql.com',
    user: '2NENeh51vq',
    password: 'UwthtjzZy8',
    database: '2NENeh51vq'
});

con.connect((error) => {
  if(error) console.log(error);
    console.log('connected');

});

const getAllQuestions = (callback) => {
    const queryString = `SELECT * FROM Questions`;
    con.query(queryString, (error, question) => {
        if(error){ 
          console.log(error, "error inserting question on database")
        }
        callback(null, question);
    })
};

const savedAnswers = (answer, callback) => {
    const queryString = `INSERT INTO Answers (answer) values answer=${answer}`;
    con.query(queryString, (error, answers) => {
        if(error){
            console.log(error, "error inserting answer on database")
        };
        callback(null, answers);
    })
}

module.exports = {getAllQuestions, savedAnswers};
