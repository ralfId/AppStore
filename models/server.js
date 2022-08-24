const express = require('express');
const cors = require('cors');
const db = require('../db/connection');

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            apps: '/api/apps',
            appScore: '/api/appScore',
            appAverage: '/api/appAverage',
            appComments: '/api/appComments',
            category: '/api/category',
        }

        //conectar a la BD
        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        try {
            await db.authenticate();
            console.log('data base is online')
        } catch (error) {
            console.log(error)
            throw new Error('error to init db');
        }
    }

    routes(){
        this.app.use(this.paths.apps, require('../routes/appRoutes'));
        this.app.use(this.paths.appScore, require('../routes/appScoreRoutes'));
        this.app.use(this.paths.appAverage, require('../routes/averageRatingRoute'));
        this.app.use(this.paths.appComments, require('../routes/commentsRoutes'));
        this.app.use(this.paths.category, require('../routes/categoryRoutes'));
    }
    
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
        process.on('warning', e => console.warn(e.stack));
    }

    middlewares(){
        this.app.use(cors());//cors middleare
        this.app.use(express.json()); // set body as json
    }
}

module.exports = Server;