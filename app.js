import 'dotenv/config';
import http from 'http';

const port = 3000;
const localhost = '127.0.0.1';

const server = http.createServer(async (req, res) => {
    try {
        console.log('hello');
        res.statusCode = 200;
        res.end('hello world!');
    } catch (err) {
        res.statusCode = 404;
        res.end(err.message);
    }
});

server.listen(port,localhost,() => {
    console.log(`Server listening on port ${port}`);
})