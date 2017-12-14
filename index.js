//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3336, function(){
    //console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
