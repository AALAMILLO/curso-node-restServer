const {response} = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre = 'no_name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'Get api',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.status(500).json({
        msg: 'Put api',
        id
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'Post api',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete api'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}