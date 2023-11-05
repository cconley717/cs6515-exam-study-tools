const express = require('express');
const path = require('path');

const app = express();

const PORT = 80;

app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/javascript', express.static(path.join(__dirname, '/public/javascript')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'index.html'));
});


app.get('/exam2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'exam2.html'));
});

app.get('/exam2/rsa', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'rsa.html'));
});

app.get('/exam2/graph-algorithms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'graph-algorithms.html'));
});

app.get('/exam2/graph-algorithms/dfs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'dfs.html'));
});

app.get('/exam2/graph-algorithms/bfs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'bfs.html'));
});

app.get('/exam2/graph-algorithms/dijkstra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'dijkstra.html'));
});

app.get('/exam2/graph-algorithms/bellman-ford', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'bellman-ford.html'));
});

app.get('/exam2/graph-algorithms/floyd-warshall', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'floyd-warshall.html'));
});

app.get('/exam2/graph-algorithms/prim', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'prim.html'));
});

app.get('/exam2/graph-algorithms/kruskal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'kruskal.html'));
});

app.get('/exam2/graph-algorithms/max-flow', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'max-flow.html'));
});

app.get('/exam2/graph-algorithms/scc', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'scc.html'));
});

app.get('/exam2/graph-algorithms/edges', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam2', 'edges.html'));
});


app.get('/exam3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam3', 'exam3.html'));
});

app.get('/exam3/lp', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/exam3', 'lp.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});