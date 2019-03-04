const Salarie = require ('../models/salarie.model.js');
const fs = require('fs');


exports.createSalarie = (req, res) => {
    let salarie =  new Salarie ({
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Username: req.body.Username,
        Birthday: req.body.Birthday,
        Adresse:{
            Rue: req.body.Adresse.Rue,
            Ville: req.body.Adresse.Ville,
            CP: req.body.Adresse.CP
        },
        Telephone: req.body.Telephone,
        Mail: req.body.Mail,
        Poste: req.body.Poste,
    });
    salarie.save((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Salarie ajoute');
        }
        res.send(salarie);
    })
}

exports.getSalarie = (req, res) => {
    Salarie.find((err, salarie) => {
        if (err){
            console.log(err);
        }
        res.send(salarie);
    })
}

exports.getSalarieById = (req, res) => {
    Salarie.findById(req.params.id, (err, salarie) => {
        if (err){
            console.log(err);
        }
        res.send(salarie);
    })
}

exports.UpdateSalarie = (req, res) => {

    Salarie.findByIdAndUpdate(req.params.id, req.body, (err, salarie) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Salarie a jour");
        }
        res.send(salarie);

    })
}

exports.removeSalarie = (req, res) => {
    Salarie.findByIdAndRemove(req.params.id, req.body, (err, salarie) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Salarie supprime");
        }
        res.send(salarie);
    })
}
