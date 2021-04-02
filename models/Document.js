const mongoose = require('mongoose');

const documentShema = mongoose.Schema({
    titre: {type: String, required: true},
    contenu: {type: String, required: true},
    sommaire: {type: String, required: true},
    image: {type: String, required: false},
    date: {type: String, required: true},
});

module.exports = mongoose.model('Document', documentShema);