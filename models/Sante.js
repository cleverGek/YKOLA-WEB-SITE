const mongoose = require('mongoose');

const santeSchema = mongoose.Schema({
    titre: {type: Number, required: true},
    image: {type: String, required: true},
    vrai: {type: String, required: true},
    faux: {type: String, required: true},
    sommaire: {type: Number, required: true}
});

module.exports = mongoose.model('Sante', santeSchema);