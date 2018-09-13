const request = require('supertest');
const app = require('../app');

describe('Probar Express App', () => {
    test('Debe responder al método GET', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});