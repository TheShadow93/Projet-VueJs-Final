const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

let ProjetSchema =  new Schema ({
    NomduProjet: String,
    ProjetDescription: String,
    DatedeDebut: String,
    DatedeFin: String,
    MontantTotal: Number,
    Statut: String
});

module.exports =  mongoose.model('Projet', ProjetSchema);
