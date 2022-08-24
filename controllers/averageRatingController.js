const {request, response} = require('express');

// const getAllApps = async (req = request, res = response)=>{

// }

const getAppAverage = async (req = request, res = response)=>{
    res.json({msg: 'conectado a la api de app store'})
}

module.exports = {
    getAppAverage,
}