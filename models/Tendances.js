const mongoose = require('mongoose');

const Tendances = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    category: {type: Number, required: true},
    titre: {type: Number, required: true},
    image: {type: String, required: true},
    titre: {type: String, required: true},
    vrai: {type: String, required: true},
    faux: {type: String, required: true},
    sommaire: {type: Number, required: true},
    flag: {type: Boolean, default: true},
    deleted: {type: Boolean, default: false}
},{
    timestamps : true
});

module.exports = mongoose.model('Tendances', Tendances);