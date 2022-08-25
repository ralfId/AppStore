const { request, response } = require('express');
const Application = require('../models/application');
const AppScore = require('../models/appScore');
const AverageRating = require('../models/averageRating');

const scoreApp = async (req = request, res = response) => {
    const body = req.body;

    try {
        const app = await Application.findByPk(body.appId);

        if (app) {
            let data = {
                appId: body.appId,
                score: body.score,
                state: true,
            }
            const newscore = await AppScore.create(data);
            await updateAverageRating(body.appId)

            return res.json({ data: newscore });
        } else {
            return res.status(404).json({ msg: `Can not find an app with the id ${id}` });
        }


    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}

const updateAverageRating = async (appId) => {
    try {

        let AppScores = await AppScore.findAll({ where: { appId: appId } });
        let appScore = 0;
        for (let indexScore = 0; indexScore < AppScores.length; indexScore++) {
            appScore += AppScores[indexScore].score;

        }

        const updateAverage = await AverageRating.findAll({ where: { appId: appId } });
        const cd = updateAverage[0];

        if (updateAverage) {
            updateAverage[0].update({ average: Math.floor(appScore / AppScores.length).toFixed(1) });
        }


    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    scoreApp,
}