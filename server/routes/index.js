var express = require('express');

var router = express.Router();

router.get('/', function(request, response){
    var joinedPath = path.join(__dirname, '../public/views/index.html');
    console.log("joined path", joinedPath);
    response.sendFile(joinedPath);
});

module.exports = router;