var express = require('express');
var router = express.Router();
var Usuario = require('./usuarios')
router.post('/', (req, res) => {
    let e = new Usuario({
        nome: req.body.nome,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
    });
    e.save((err, estud) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Usuario.find().exec((err, est) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(est);
    })
})
router.delete('/:id', (req, res) => {
    Estudante.deleteOne({ _id: req.params.id }, (err) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Estudante.findById(req.params.id, (err, est) => {
        if (err)
            res.status(500).send(err);
        else if (!est)
            res.status(404).send({});
        else {
            est.nome = req.body.nome,
                est.cpf = req.body.cpf,
                est.endereco = req.body.endereco,
                est.telefone = req.body.telefone,
            est.save((err, est) => {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(200).send(est);
            })
        }
    })
})
module.exports = router;