const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const url = require('url');

const fs = require('fs')

const rawdata = fs.readFileSync('./jsdic.json');
const dic = JSON.parse(rawdata);

app.get('/', function (req, res){
    res.sendFile(__dirname + "/index.html");
});


app.get('/script.js', function (req, res){
    res.sendFile(__dirname + "/script.js");
});

app.get('/list/', function (req, res){
    let ar =[]

    //We will get the Url data
    const urla = req.url
    const q =  url.parse(urla, true);
    let sub
    let sen

    //Going to run through the dictionary Array
    for(let i=0; i<dic.length; i++) {
        //Substract whole String before the numbered Charachter
        sub = dic[i].substr(dic[i].length - q.query.num);

        //Again ubstract whole String before the numbered Charachter
        sen = q.query.sentence.substr(q.query.sentence.length - q.query.num)

        //Check if they are the same
        if(sub == sen) {

            //Push in the Array
         ar.push(dic[i])
        }
}

res.setHeader('Content-Type', 'application/json');
//Send the Array
res.send(JSON.stringify(ar))

})

app.listen(port, function () {
    console.log('started');
})


