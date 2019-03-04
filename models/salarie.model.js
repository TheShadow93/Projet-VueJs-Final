const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

let SalarieSchema =  new Schema ({
    Nom: String,
    Prenom: String,
    Username: String,
    Birthday: String,
    Adresse: {
        Rue: String,
        Ville: String,
        CP: Number
    },
    Telephone: {type: String, match: /\d{10}/},
    Mail: String,
    Poste: String
});

module.exports =  mongoose.model('Salarie', SalarieSchema);
