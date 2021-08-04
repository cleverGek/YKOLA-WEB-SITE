const mongoose = require('mongoose');

const sportSchema = mongoose.Schema({
    titre: {type: String, required: true},
    image: {type: String, required: true},
    vrais: {type: String, required: true},
    faux: {type: String, required: true},
    sommaire: {type: String, required: true},
    barometre: {type: String, require: true}
});

module.exports = mongoose.model('sport', sportSchema);