const express = require('express');
const path = require('path');

const app = express();

const PORT = 80;

app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/javascript', express.static(path.join(__dirname, '/public/javascript')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'index.html'));
});

app.get('/rsa', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'rsa.html'));
});

app.get('/graph-algorithms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'graph-algorithms.html'));
});

app.get('/graph-algorithms/dfs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'dfs.html'));
});

app.get('/graph-algorithms/bfs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'bfs.html'));
});

app.get('/graph-algorithms/dijkstra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'dijkstra.html'));
});

app.get('/graph-algorithms/bellman-ford', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'bellman-ford.html'));
});

app.get('/graph-algorithms/floyd-warshall', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'floyd-warshall.html'));
});

app.get('/graph-algorithms/prim', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'prim.html'));
});

app.get('/graph-algorithms/kruskal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'kruskal.html'));
});

app.get('/graph-algorithms/ford-fulkerson', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'ford-fulkerson.html'));
});

app.get('/graph-algorithms/edmonds-karp', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'edmonds-karp.html'));
});

app.get('/graph-algorithms/scc', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'scc.html'));
});

app.get('/graph-algorithms/edges', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'edges.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});