import { app, appServer } from './main';
import * as db from '../../database/models';

const request = require('supertest');

describe('Sample Test', () => {
    beforeAll(async () => {
        await db.sequelize.sync({force: true});
    });

    afterAll(() => {
        appServer.close();
    });

    it('should return users list', async () => {
        const dataMockUser = {firstName: 'Иван', lastName: 'Иванов'};

        await db.sequelize.models.User.create(dataMockUser);

        const res = await request(app)
            .get('/api/users');

        expect(res.statusCode).toEqual(200);
        expect(res.body.data[0].id).toEqual(1);
        expect(res.body.data[0].firstName).toEqual(dataMockUser.firstName);
        expect(res.body.data[0].lastName).toEqual(dataMockUser.lastName);
    })
});
