const mongoose = require('mongoose');

const cultureSchema = mongoose.Schema({
    titre: {type: Number, required: true},
    image: {type: String, required: true},
    vrai: {type: String, required: true},
    faux: {type: String, required: true},
    sommaire: {type: Number, required: true}
});

module.exports = mongoose.model('Culture', cultureSchema);