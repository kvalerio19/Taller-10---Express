const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello Word Express');

});

app.get('/about', (req, res) =>{
    res.send('This a Small Express');

});

app.listen(port, () =>{
    console.log(`Server Listening on http://localhost:${port}`);

})