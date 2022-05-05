const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    return res
        .type("application/json")
        .status(200)
        .json({result: 'Hello world!'});
});
app.get("/date", (req, res) => {
    const today = new Date();
    const expectedResponse = {
        currentDate: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        currentTime: today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    };
    return res
        .type("application/json")
        .status(200)
        .json({result: expectedResponse});
})


module.exports = app;
