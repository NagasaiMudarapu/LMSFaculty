var exp = require('express') ;
var app = exp() ;

app.use(exp.static(__dirname + '/frontend')) ;

app.get('/', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/index.html');
}) ;

var port = process.env.PORT || 3000 ;
app.listen(port, function()
{
    console.log("Site Running on http://localhost:" + 3000) ;
}) ;