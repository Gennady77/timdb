import { Express } from 'express';
import { createServer } from 'http';
import { User } from '../../type';
import * as db from '../../database/models';
import { Sequelize, Model } from 'sequelize';

const express = require('express');

const port = 8080;
export const app: Express = express();

const httpServer = createServer(app);

const host = `http://localhost:${port}`;

app.get(`/api/users`, async (req, res) => {
    const modelUsers: Model<User>[] = await (db.sequelize as Sequelize).models.User.findAll<Model<User>>();

    const users = modelUsers.map(model => model.toJSON());

    res.status(200).send({data: users});
});

export const appServer = httpServer.listen(port, () => {
    console.log(`Server is listening on ${host}`);
});
