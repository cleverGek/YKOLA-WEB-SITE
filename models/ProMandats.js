const mongoose = require('mongoose');

const ProMandats = mongoose.Schema({
    auteur: {type: String, required: true},
    promesse: {type: String, required: true},
    contenu: {type: String, required: true},
    date: {type: String, required: true},
    lieu: {type: String, required: true},
    circonstance: {type: String, required: true},
    tauxProgress: {type: String, required: true},
});

module.exports = mongoose.model('ProMandats', ProMandats);