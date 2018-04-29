const express = require('express')
const morgan = require('morgan')
const app = express()

app.set('port', process.env.PORT || 8000)
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(morgan('tiny'))
app.use('/public', express.static('public'))
app.use(require('./routes/submit'))

app.get('/', (req, res) => {
  res.render('welcome')
})

app.listen(app.get('port'), () => {
  console.log('app.js: IIIT-Bh Online Judge, now live at localhost:' + app.get('port'))
})
