const res = require("express/lib/response")
const { Category } = require("../models/Category")


const categoryService = {

    getAll: (req, res) => {
        Category.find({}, (err, docs) => {

            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err)
            }

        })
    },

    getById : (req,res) => {

        let id = req.params.id;

        Category.findById(id, (err,doc) => {
            if(!err){
                res.json(doc);
            }
        })

    },

    add: (req,res) => {
        let category = new Category({
            name : req.body.name,
            description : req.body.description
        })

        category.save((err,doc) => {

            if(!err){
                res.json(doc)
            }
            else{
                res.status(500).json(err);
            }

        })

    }

}

module.exports = {
    categoryService
}