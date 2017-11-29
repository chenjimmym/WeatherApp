
var path = require('path');

module.exports = function(app){

    app.all("*", (req,res,next) => {
        res.sendFile(path.join(__dirname, "./../../public/dist/index.html"))
    });

}