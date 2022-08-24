const { request, response } = require('express');
const Application = require('../models/application');
const AppScore = require('../models/appScore');

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

            return res.json({ data: newscore });
        } else {
            return res.status(404).json({ msg: `Can not find an app with the id ${id}` });
        }

       
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}


module.exports = {
    scoreApp,
}