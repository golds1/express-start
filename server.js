// server.js

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

//const app = express();
// use app.js settings
const app = require('./app');
const compiler = webpack(config);

const PORT = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

/*app.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'index.html'))
});*/

app.listen(PORT, 'localhost', err =>  {
    if (err) {
        console.log(err)
        return
    }

    console.log(`Listening at http://localhost:${PORT}`)
});