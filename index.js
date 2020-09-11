const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.body);
    console.log('Hello wordjj');
    res.end('Ok myfriend');
});

app.listen(3333, () => {
    console.log('server on port 3333');
});