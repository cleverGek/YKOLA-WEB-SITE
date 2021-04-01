const mongoose = require('mongoose');

const CategoryTendances = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {type: String, required: true},
    flag: {type: Boolean, default: true},
    deleted: {type: Boolean, default: false}
},{
    timestamps : true
});

module.exports = mongoose.model('CategoryTendances', CategoryTendances);