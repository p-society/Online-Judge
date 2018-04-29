const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const mysql = require('mysql')
const shell = require('shelljs')
const app = express()
const router = express.Router()
const jsonParser = bodyParser.json()

router.get('/solution/:solid', (req, res) => {
  // SQL statements await here, which would fetch the code, details, etc.
})

module.exports = router
