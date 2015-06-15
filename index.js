var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.set('view options', {
  layout: false
});

app.use(express.static(__dirname + '/public')); // Recursos estaditos disponibles para el acceso a travéz del  site.

app.get('/', function(req, res){
  res.type('text/html');
  res.render('main', {
    title: 'screen first'
  });
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; Press Ctrl-C on terminate.');
});
