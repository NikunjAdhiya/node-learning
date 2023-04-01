const express = require('express');

// express app
const app = express();

// listen for request
app.listen(8080);

app.get('/', (req, res) => {
    //  res.send('<p>Nikunj Adhiya page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.sendFile('./views/about.html', { root: __dirname });
})

app.get('/about-us', (req,res)=>{
    res.redirect('/about');
})

// 404 page

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})
