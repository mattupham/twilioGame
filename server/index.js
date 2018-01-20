var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//guess number (initially null)
let guessNumberInServer = null;

let createResponse = (msgFrom, msgBody, status) => {
  return (`
    <Response>
      <Message>
        --- HELLO ${msgFrom}. ${msgBody} ${status} ---
      </Message>
    </Response>
  `);
}

app.post('/message', function (req, res){

  //guess number is present (from front-end)
  if (req.body.guessNumber){
    //set guess number, send it back
    guessNumberInServer = req.body.guessNumber;
    res.send(guessNumberInServer);
  } else {
    //if incoming text
    var msgFrom = req.body.From;
    var msgBody = req.body.Body;

    //texts
    if (guessNumberInServer === null) {
      res.send(createResponse(msgFrom, '---', 'NUMBER HAS NOT BEEN SET'));
    } else if (+msgBody < +guessNumberInServer) {
      res.send(createResponse(msgFrom, msgBody, 'IS INCORRECT, GUESS HIGHER'));
    } else if ((+msgBody) > +guessNumberInServer) {
      res.send(createResponse(msgFrom, msgBody, 'IS INCORRECT, GUESS LOWER'));
    } else if (+msgBody === +guessNumberInServer){
      res.send(createResponse(msgFrom, msgBody, 'IS CORRECT, CONGRATS!'));
    }
  }

})

app.listen(3000, function() {
  console.log('Listening on port 3000');
});