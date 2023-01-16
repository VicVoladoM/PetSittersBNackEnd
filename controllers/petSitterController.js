const { QueryTypes } = require('sequelize');
const connectBd = require('../config/connection');
const petSitterQueries = require('../config/queries/petSitterQueries');

const crearPetSitter = (req, res) => {
    const conn = connectBd();
    let params = req.body;
    conn.query(petSitterQueries.crearPetSitter,{
        bind: params,
        type: QueryTypes.INSERT,
    })
    .then((result) => {
        res.status(200).send({avances: result  });
    })
    .catch((err) => {
        res.status(200).send({afectedRows: result[1] });
    });
};

const editarPetSitter = (req, res) => {
    const conn = connectBd();
    let params = req.body;
    console.log("ParametrosBody"+params.id)
    params.id = req.params.id;
    conn.query(petSitterQueries.editarPetSitter, {
        type: QueryTypes.UPDATE,
        bind: params
    })
    .then((result) => {
        res.status(200).send({proyectos: result});
    })
    .catch((err) => {
        res.status(200).send({ errorCode: 404, errorMessage: err });
    })
};

const eliminarPetSitter = (req, res) => {
    const conn = connectBd();
    let id = req.params.id;
    if (id)
        conn
        .query(petSitterQueries.eliminarPetSitter, {
            bind: { id },
            type: QueryTypes.DELETE,
        })
        .then((result) => {
            res.status(200).send({ changes: result });
        })
        .catch((err) => {
            res.status(200).send({ errorCode: 404, errorMessage: err });
        });
    else
        return res
            .status(200)
            .send({ errorCode: 403, errorMessage: "id is missing krnal :(" });
};


const obtenerPetSitters = (req, res) => {
    const conn = connectBd();
    let params = req.body;
    conn.query(petSitterQueries.obtenerPetSitters,{
        type: QueryTypes.SELECT,
    })
    .then((result) => {
        res.status(200).send({Registros: result }); 
    })
    .catch((err) => {
        console.log(params);
        res.status(200).send({afectedRows: result[1] });
    });
};

const obtenerPetSittersByState = (req, res) => {
    const conn = connectBd();
    let id = req.params.id;
    
    if (id)
      conn
        .query(petSitterQueries.obtenerPetSittersByState, {
          bind: {id},
          type: QueryTypes.SELECT,
        })
        .then((result) => {
          res.status(200).send({ registros: result });
        })
        .catch((err) => {
          res
            .status(200)
            .send({ errorCode: 404, errorMessage: err.original.message });
        });
    else
      return res
        .status(200)
        .send({ errorCode: 403, errorMessage: "id is missing :(" });
};

const AgregarPetSitterType = (req, res) => {
    const conn = connectBd();
    let params = req.body;
    conn.query(petSitterQueries.AgregarPetSitterType,{
        bind: params,
        type: QueryTypes.INSERT,
    })
    .then((result) => {
        res.status(200).send({avances: result  });
    })
    .catch((err) => {
        res.status(200).send({afectedRows: result[1] });
    });
};

const obtenerPetSitterByType = (req, res) => {
    const conn = connectBd();
    let id = req.params.id;
    
    if (id)
      conn
        .query(petSitterQueries.obtenerPetSitterByType, {
          bind: {id},
          type: QueryTypes.SELECT,
        })
        .then((result) => {
          res.status(200).send({ registros: result });
        })
        .catch((err) => {
          res
            .status(200)
            .send({ errorCode: 404, errorMessage: err.original.message });
        });
    else
      return res
        .status(200)
        .send({ errorCode: 403, errorMessage: "id is missing :(" });
};

module.exports = {
    crearPetSitter,
    editarPetSitter, 
    eliminarPetSitter,
    obtenerPetSitters,
    obtenerPetSittersByState,
    AgregarPetSitterType,
    obtenerPetSitterByType
}