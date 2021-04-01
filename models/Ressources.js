const mongoose = require('mongoose');

const Ressources = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    category: {type: String, required: true},
    titre: {type: String, required: true},
    contenu: {type: String, required: true},
    sommaire: {type: String, required: true},
    image: {type: String, required: true},
    date: {type: String, required: true},
    flag: {type: Boolean, default: true},
    deleted: {type: Boolean, default: false}
},{
    timestamps : true
});

module.exports = mongoose.model('Ressources', Ressources);