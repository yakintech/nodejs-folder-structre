const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    addDate: { type: Date, default: Date.now },
    isDeleted : {type: Boolean, default : true}
})

const Category = mongoose.model('category', categorySchema);

module.exports = {
    Category
}