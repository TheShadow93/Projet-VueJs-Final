const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

let ClientSchema =  new Schema ({
    NomSociete: String,
    Adresse: {
        Rue: String,
        Ville: String,
        CP: Number
    },
    ContactReference: {
        nom: String,
        prenom: String,
        Telephone: {type: String, match: /\d{10}/},
        mail: String
    },
    Secteur: String
});

module.exports =  mongoose.model('Client', ClientSchema);
