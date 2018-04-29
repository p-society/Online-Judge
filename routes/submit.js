const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const mysql = require('mysql')
const shell = require('shelljs')
const app = express()
const router = express.Router()
const jsonParser = bodyParser.json()


// DB maintains the record of all the submissions.
/*
const connection = mysql.createConnection({
  host: 'localhost',
  port: '5000',
  user: 'root',
  password: 'password'
})

connection.connect((err) => {
  if (err) {
    console.error('Connection to DB failed!')
  } else {
    console.log('Connection to DB established!')
  }
})
*/

const ext = {
  'C': '.c',
  'C++': '.cpp',
  'Python': '.py'
}

function compile (lang, time) {
  var filenm = './temp/' + time + ext[lang]
  var outfilenm = './temp/output.txt'
  if (lang === 'C++') {
    var comm = 'g++ ' + filenm
    if (shell.exec(comm) !== 0) {
      console.error(filenm + ': Compilation Error!')
    } else {
      console.log(filenm + ': Compilation Successful!')
      var comm = './a.out < ./temp/input.txt > ' + outfilenm
      shell.exec(comm)
    }
  } else if (lang === 'C') {
    var comm = 'gcc ' + filenm
    if (shell.exec(comm) !== 0) {
      console.error(filenm + ': Compilation Error!')
    } else {
      console.log(filenm + ': Compilation Successful!')
      var comm = './a.out < ./temp/input.txt > ' + outfilenm
      shell.exec(comm)
    }
  } else if (lang === 'Python') {
    var comm = 'python ' + filenm + ' < ./temp/input.txt > ' + outfilenm
    if (shell.exec(comm) !== 0) {
      console.error(filenm + ': Compilation Error!')
    } else {
      console.log(filenm + ': Compilation Successful!')
    }
  } else {
    console.log("Incorrect Language Passed!")
  }
}

router.get('/submit', (req, res) => {
  res.render('submit')
})

router.post('/submit/save', jsonParser, (req, res) => {
  // console.log(req.body['content'])
  const a = Math.floor(new Date())
  var filenm = './temp/' + a + ext[req.body['lang']]
  var outfilenm = './temp/' + a + '.txt'
  fs.writeFile(filenm, req.body['content'], (err) => {
    if (err) {
      console.error("Temp file could not be written!")
    }
    console.log("Temp file written successfully!")
  })
  res.status(200).send()
  compile(req.body['lang'], a)
})

module.exports = router
