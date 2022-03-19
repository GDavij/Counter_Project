const express = require('express')
const { listen } = require('express/lib/application')

const app = express()
const port = 8080

let Acesses = 1

app.set('views' , 'dist/views')
app.set('view engine' , 'ejs')

app.use(express.static('dist'))

app.use('css', express.static(__dirname + 'public/css'))
app.use('ts', express.static(__dirname + 'code'))

app.get('/', (req, res) => {
   res.render('pages/Index')
   console.log(`Acess #${Acesses}`)
    ++Acesses
})

app.listen(port, () => {
   console.info(`Server On and On, Listening on port ${port}`)
})