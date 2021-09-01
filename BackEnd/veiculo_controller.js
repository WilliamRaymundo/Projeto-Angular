var express = require('express');
var router = express.Router();
var Veiculo = require('./veiculos')
router.post('/', (req, res) => {
    let e = new Veiculo({
        placa: req.body.placa,
        cor: req.body.cor,
    });
    e.save((err, estud) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Veiculo.find().exec((err, est) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(est);
    })
})
router.delete('/:id', (req, res) => {
    Veiculo.deleteOne({ _id: req.params.id }, (err) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Veiculo.findById(req.params.id, (err, est) => {
        if (err)
            res.status(500).send(err);
        else if (!est)
            res.status(404).send({});
        else {
            est.placa = req.body.placa,
                est.cor = req.body.cor,
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