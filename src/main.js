const app = require("./app");

const start = (port) => {
    try {
        const server = app.listen(port, function () {
            const host = server.address().address;
            const port = server.address().port;
            console.log('Example app listening at http://%s:%s', host, port);
        });
    } catch (err) {
        console.error(err);
        process.exit();
    }
};

start(8081);
