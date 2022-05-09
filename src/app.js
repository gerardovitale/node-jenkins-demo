const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    return res.type("application/json")
        .status(200)
        .json({result: 'Hello world!'});
});
app.get("/date", (req, res) => {
    const today = new Date();
    const date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const response = {
        currentDate: date,
        currentTime: time,
        currentISODate: `${date}T${time}Z`
    };
    return res.type("application/json")
        .status(200)
        .json({result: response});
})


module.exports = app;
