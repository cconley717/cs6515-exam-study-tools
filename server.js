const express = require('express');
const path = require('path');

const app = express();

const PORT = 80;

app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/javascript', express.static(path.join(__dirname, '/public/javascript')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});