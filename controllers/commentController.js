const { request, response } = require('express');
const Application = require('../models/application');
const Comment = require('../models/comment');

const getAppComments = async (req = request, res = response) => {
    const { id } = req.params; //app id

    try {
        const commentApp = await Comment.findAll({ where: { appId: id } });

        if (!commentApp) {
            return res.status(400).json({ msg: 'There is no comments for app' });
        }

        return res.json({ count: commentApp.length, data: commentApp });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}

const createComment = async (req = request, res = response) => {
    const body = req.body; //app id

    try {
        const app = await Application.findByPk(body.appId);

        if (app) {

            let data = {
                appId: body.appId,
                userName: body.userName,
                comment: body.comment,
                state: true,
            }
            const newComment = await Comment.create(data);

            return res.json({ data: newComment });
        } else {
            return res.status(404).json({ msg: `Can not find an app with the id ${id}` });
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}
module.exports = {
    getAppComments,
    createComment
}