const mongoose = require('mongoose');

const Auteurs = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    noms: {type: String, required: true},
    profile: {type: String, required: true},
    flag: {type: Boolean, default: true},
    deleted: {type: Boolean, default: false}
},{
    timestamps : true
});

module.exports = mongoose.model('Auteurs', Auteurs);