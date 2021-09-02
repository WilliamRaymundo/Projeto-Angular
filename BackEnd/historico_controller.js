var express = require('express');
var router = express.Router();
var Historico = require('./historico')
router.post('/', (req, res) => {
    let e = new Historico({
        entrada: req.body.entrada,
        saida: req.body.saida,
        permissao: req.body.permissao,
        capPlaca: req.body.capPlaca,
    });
    e.save((err, estud) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Historico.find().exec((err, est) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(est);
    })
})
router.delete('/:id', (req, res) => {
    Historico.deleteOne({ _id: req.params.id }, (err) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Historico.findById(req.params.id, (err, est) => {
        if (err)
            res.status(500).send(err);
        else if (!est)
            res.status(404).send({});
        else {
            est.entrada = req.body.entrada,
                est.saida = req.body.saida,
                est.permissao = req.body.permissao,
                est.capPlaca = req.body.capPlaca,
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