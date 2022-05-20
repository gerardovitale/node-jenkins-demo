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
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const expectedResponse = {
            result: {
                currentDate: today.toLocaleDateString(),
                currentTime: time,
                currentISODate: `${today.toLocaleDateString()}T${time}Z`
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

    test("GET /worldwide_clock", (done) => {
        const date = new Date();
        const timeOffsets = {
            caracas: -4,
            buenosAires: -3,
            accra: 0,
            london: 1,
            madrid: 2,
            bucharest: 3
        };
        const expectedResponse = {
            result: Object.entries(timeOffsets)
                .map((timeOffset) => {
                    return {
                        [timeOffset[0]]: new Date(date.getTime() + (3600000 * timeOffset[1]))
                            .toLocaleString()
                    }
                })
        }
        request(app).get("/worldwide_clock")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect(expectedResponse)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    })
});
