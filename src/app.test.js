const request = require("supertest");
const app = require("./app");


describe("Test example", () => {
    test("GET /", (done) => {
        request(app)
            .get("/")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test("GET /date", (done) => {
        const today = new Date();
        const date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const expectedResponse = {
            result: {
                currentDate: date,
                currentTime: time,
                currentISODate: `${date}T${time}Z`
            }
        };

        request(app).get("/date")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect(expectedResponse)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    })
});
