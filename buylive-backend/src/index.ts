require('dotenv').config();

import express from 'express';
import cors from 'cors';
import {routes} from "./routes";
import {createConnection} from "typeorm";
import cookieParser from "cookie-parser";
import admin from 'firebase-admin'



createConnection().then(connection => {
    const app = express();


    const serviceAccount = require("./../serviceAccountKey.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });



    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({
        credentials: true,
        origin: ["http://localhost:3000"]
    }));

    routes(app);

    app.listen(8000, () => {
        console.log('listening to port 8000')
    });
});

