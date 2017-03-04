var express = require('express')
var config = require('./config')
var path = require('path')
var app
var devServer

if (process.env.NODE_ENV !== 'production') {
  devServer = require('./build/dev-server')
  app = devServer.app
} else {
  app = express()
  var staticPath = path.posix.join(__dirname, 'dist/static');
  app.use('/static', express.static(staticPath))

  app.listen(8080, function (err) {
    if (err) {
      console.log(err)
    }
  })
}

app.get('/api/foo', function(req, res) {
  res.send('bar')
  res.end()
})

if (process.env.NODE_ENV === 'production') {
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
  })
} else {
  console.log('dev');
  app.get('*', function response(req, res) {
    console.log('get html');
    res.write(devServer.devMiddleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
}
