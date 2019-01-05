//file:///C:/Users/sanjayda/IdeaProjects/readBlog-all/src/main/resources/static/index.html

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('C:/Users/sanjayda/IdeaProjects/readBlog-all/src/main/resources/static/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);