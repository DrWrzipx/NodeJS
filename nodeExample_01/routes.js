const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {

        res.write('<html>');
        res.write('<head>');
        res.write('<title>Enter Message</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        // Event listener for listen stream of data (for listening request in buffer)
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Hello World </title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Hello Matic</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
};

//module.exports = requestHandler;

/*
module.exports = {
    handler: requestHandler,
    someText: 'Some hardcoded text.'
}
*/

exports.handler = requestHandler;
exports.someText = 'Some hardcoded text.';