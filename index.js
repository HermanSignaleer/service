const express = require('express');
const app = express();
const db = require('./database/index.js');
const bodyParser = require('body-parser');
const port = 4008;

app.use(bodyParser.json());

app.use(express.static('./client/dist'));

app.post('/Questions', (request, response) => {
    console.log(request.body);
    let body = request.body;
    db.savedAnswers(body, (error, answers)=> {
        if(err){
            console.log(error, "error posting cusAnswers from server");
            response.end()
        } 
        response.send(answers)
    })
});

app.get('/Questions', (request, response) => {
    console.log(request.body);
    db.getAllQuestions((error, question)=> {
        if(error){
            console.log(error, "error getting cusQuestion from server");
            response.end()
        }
        response.send(question)
    })
});

app.listen(port, () => {
    console.log("listening on port 4008");
});