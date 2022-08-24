const { request, response } = require('express');
const Category = require('../models/category');

const getAllCategory = async (req = request, res = response) => {

    try {
        const allCategories = await Category.findAll();

        if (!allCategories) {
            return res.status(400).json({ msg: 'There is no categories' });
        }

        return res.json({ count: allCategories.length, data: allCategories });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}

const getCategoryById = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const catg = await Category.findByPk(id);

        if (catg) {
            return res.json({ data: catg });
        } else {
            return res.status(404).json({ msg: `Can not find a category with the id ${id}` });
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'internal server error' });
    }
}
module.exports = {
    getAllCategory,
    getCategoryById
}