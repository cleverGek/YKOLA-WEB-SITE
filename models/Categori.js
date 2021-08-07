const mongoose = require('mongoose');

const Categories = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {type: String, required: true},
    describe: {type: String, required: true},
    image: {type: String, required: true},
    flag: {type: Boolean, default: true},
    deleted: {type: Boolean, default: false}
},{
    timestamps : true
});

module.exports = mongoose.model('Categories', Categories);