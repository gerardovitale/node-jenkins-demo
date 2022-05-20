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
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const response = {
        currentDate: today.toLocaleDateString(),
        currentTime: time,
        currentISODate: `${today.toLocaleDateString()}T${time}Z`
    };
    return res.type("application/json")
        .status(200)
        .json({result: response});
})
app.get("/worldwide_clock", (req, res) => {
    const date = new Date();
    const timeOffsets = {
        caracas: -4,
        buenosAires: -3,
        accra: 0,
        london: 1,
        madrid: 2,
        bucharest: 3
    };
    const response = Object.entries(timeOffsets)
        .map((timeOffset) => {
            return {
                [timeOffset[0]]: new Date(date.getTime() + (3600000 * timeOffset[1]))
                    .toLocaleString()
        }
    });
    return res.type("application/json")
        .status(200)
        .json({result: response});
})


module.exports = app;
