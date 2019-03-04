const Projet = require ('../models/projet.model.js');
const fs = require('fs');

exports.createProject = (req, res) => {
    let projet =  new Projet ({
        NomduProjet: req.body.NomduProjet,
        ProjetDescription: req.body.ProjetDescription,
        DatedeDebut: req.body.DatedeDebut,
        DatedeFin: req.body.DatedeFin,
        MontantTotal: req.body.MontantTotal,
        Statut: req.body.Statut
    });
    projet.save((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Projet ajoute');
        }
        res.send(projet);
    })
}

exports.getProject = (req, res) => {
    Projet.find((err, projet) => {
        if (err){
            console.log(err);
        }
        res.send(projet);
    })
}

exports.getProjectById = (req, res) => {
    Projet.findById(req.params.id, (err, projet) => {
        if (err){
            console.log(err);
        }
        res.send(projet);
    })
}

exports.UpdateProject = (req, res) => {
    Projet.findByIdAndUpdate(req.params.id, req.body, (err, projet) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Projet a jour");
        }
        res.send(projet);
    })
}

exports.removeProject = (req, res) => {
    Projet.findByIdAndRemove(req.params.id, req.body, (err, projet) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Projet supprime");
        }
        res.send(projet);

    })
}
