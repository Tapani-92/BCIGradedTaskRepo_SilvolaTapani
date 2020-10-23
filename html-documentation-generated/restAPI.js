

const express = require('express');
const app = express();
const port = 3400;

app.use(express.static('views'))
app.get('', (req, res) => {
    res.render(__dirname +'/views/index.html')
});
app.listen(port);


module.exports = function() {
    
    return port;
    
}