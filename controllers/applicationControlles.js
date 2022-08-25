const { request, response } = require('express');
const Application = require('../models/application');
const Comment = require('../models/comment');
const AppScore = require('../models/appScore');
const AverageRating = require('../models/averageRating');
const Category = require('../models/category');

// const getAllApps = async (req = request, res = response)=>{
// try {

// } catch (error) {
//     console.log(error)
//     return res.status(500).json({ msg: 'internal server error' });
// }
// }

const getAllApps = async (req = request, res = response) => {
    try {
        const allApps = await Application.findAll({ where: { state: true } });

        if (!allApps) {
            return res.status(400).json({ msg: 'There is no apps' });
        }

        return res.json({ count: allApps.length, data: allApps });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}

const getAppById = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const app = await Application.findByPk(id);

        if (app) {
            return res.json({ data: app });
        } else {
            return res.status(404).json({ msg: `Can not find an app with the id ${id}` });
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}

const getAppByCategory = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const categ = await Category.findByPk(id);

        if (categ) {
            const apps = await Application.findAll({ where: { categoryId: id } });

            if (apps) {
                return res.json({ count: apps.length, data: apps });

            } else {
                return res.status(400).json({ msg: 'There is no apps for this category' });
            }

        } else {
            return res.status(404).json({ msg: `Can not find category with the id ${id}` });
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}

const deleteApp = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const app = await Application.findByPk(id);

        if (!app) {
            return res.status(400).json({ msg: 'app not exist or is already deleted' });
        }

        app.state = false;
        app.save();

        return res.json({ data: app });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}





const seedDB = async (req = request, res = response) => {
    try {

        // await seedCategory();
        // await seedApps();
        // await seedComments();
        // await seedAppScores();
        // await seedAverageRating();

        return res.json({ msg: 'data base has data' });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}
const seedCategory = async () => {
    try {

        const caregoriesNames = ['Entretenimiento', 'Herramientas y utilidades', 'Juegos',];
        const categoryArr = [];
        caregoriesNames.forEach(element => {
            let data = {
                name: `${element}`,
                state: true,
            }

            categoryArr.push(data);
        });

        await Category.bulkCreate(categoryArr);




    } catch (error) {
        console.log(error);
    }
}

const seedApps = async () => {
    try {
        let appArr = [];

        for (let index = 1; index <= 50; index++) {
            let data = {
                name: `App ${index}`,
                categoryId: Math.floor(Math.random() * 3) + 1,
                description: `App ${index}. App Store no escanea el texto de descripción en busca de palabras clave a la hora de posicionar la app/juego en la tienda, ya que existe un campo específico para ello. `,
                developer: `Desarrollador ${index}`,
                price: Math.floor(Math.random() * (1000 - 100) + 100) / 100,
                state: true,
            }
            appArr.push(data);
        }


        await Application.bulkCreate(appArr);


    } catch (error) {
        console.log(error);
    }
}

const seedComments = async () => {
    try {
        const allApps = await Application.findAll();

        let commentArr = [];
        allApps.forEach((app) => {

            for (let index = 1; index <= 3; index++) {
                let data = {
                    appId: app.id,
                    userName: `Usuario ${index}`,
                    comment: 'Amazon Appstore es una tienda de aplicaciones para el sistema operativo Android operada por Amazon.',
                    state: true,
                }
                commentArr.push(data);
            }
        });
        await Comment.bulkCreate(commentArr);


    } catch (error) {
        console.log(error);
    }
}

const seedAppScores = async () => {
    try {
        const allApps = await Application.findAll();

        let scoreArr = [];
        allApps.forEach((app) => {

            for (let index = 1; index <= 3; index++) {
                let data = {
                    appId: app.id,
                    score: Math.floor(Math.random() * 5) + 1,
                    state: true,
                }
                scoreArr.push(data);
            }
        });
        await AppScore.bulkCreate(scoreArr);

        // for (let app = 1; app < allApps.length; app++) {
        //     for (let index = 1; index <= 3; index++) {
        //         let data = {
        //             appId: app.id,
        //             score: Math.floor(Math.random() * 5) + 1,
        //             state: true,
        //         }
        //         scoreArr.push(data);
        //     }
        // }
        // await AppScore.bulkCreate(scoreArr);
    } catch (error) {
        console.log(error);
    }
}

//TODO: crear el promedio de calificacion por app
const seedAverageRating = async () => {
    try {
        const allApps = await Application.findAll();
        let AverageRatingArr = [];
        let appTotalScore = 0;

        // allApps.forEach(async app => {
        //     let AppScores = await AppScore.findAll({ where: id = app.id });

        //     console.log('apps score')
        //     console.log(AppScores)
        // });
        const AppScores = await AppScore.findAll({ where: id = 1 });
        console.log('cantidad de score')
        console.log(AppScores)
        //AppScores.forEach( (app) => appTotalScore += app.score);
        for (let index = 0; index < AppScores.length; index++) {
            // appTotalScore += AppScores[index]
            AverageRatingArr.push(AppScores[index].score);

        }
        console.log(AverageRatingArr)
        // console.log('apps score')
        // console.log(appTotalScore)

        // allApps.forEach(async (app) => {

        //     let AppScores = await AppScore.findAll({ where: app.id });

        //     AppScores.forEach(element => {
        //         appTotalScore += element.score;
        //     });

        //     let data = {
        //         appId: app.id,
        //         average: Math.round(appTotalScore / AppScores.length),
        //         state: true,
        //     }
        //     AverageRatingArr.push(data);
        //     appTotalScore = 0;
        //     AppScores = [];
        // });
        // console.log('array de promedios')
        // console.log(AverageRatingArr)


        //await AverageRating.bulkCreate(AverageRatingArr);


    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAllApps,
    //seedDB,
    getAppById,
    getAppByCategory,
    deleteApp
}