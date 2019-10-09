const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/") {
        res.write('<html>');
        res.write('<head><title>First exercise</title></head>');
        res.write('<body><h1>Welcome to our first exercise</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type ="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if( url === '/users') {
        res.write('<body><h1>Users:</h1></body>');
        res.write('<body><ul><li>Greg</li><li>Giovanna</li><li>Cookie</li></ul></body>');
    }

    if( url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            console.log(message);
        });
        
    }
};

exports.handler = requestHandler;