const express = require('express');
const cors = require('cors');
const servidorBackend = express();
const porta = 2424;
const {v4: gerarUUID
} = require('uuid'); 

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
    optionsSuccessStatus: 204,
};

servidorBackend.use(cors(corsOptions));

let bancoDeDadosPets = [];
servidorBackend.use(express.json());
servidorBackend.use(express.static('frontend'));

servidorBackend.listen(porta, () => console.log(`Servidor rodando em http://localhost:${porta}`));

servidorBackend.post('/pets', funcaoQueValidaOCadastroDoPet, funcaoQueVaiSerChamadaAoChamarUrlDePets);
servidorBackend.get('/pets', funcaoQueVaiListarOsPets);
servidorBackend.delete('/pets/:id', funcaoQueExcluiOPet);
servidorBackend.put('/pets/:id' , funcaoQueAtualizaOPet);

function funcaoQueAtualizaOPet(requisicao, resposta) {
    const id = requisicao.params.id;
    const updateData = requisicao.body;
    bancoDeDadosPets = bancoDeDadosPets.map((pet) => {
        if (pet.id === id) {
            return { ...pet, ...updateData };
        }
        return pet;
    });
    return resposta.status(200).json(bancoDeDadosPets);
}



function funcaoQueExcluiOPet (requisicao, resposta) {
    const id = requisicao.params.id
    bancoDeDadosPets = bancoDeDadosPets.filter((pet) => pet.id !== id )
    return resposta.status(200).json('');

}


function funcaoQueVaiListarOsPets(requisicao, resposta) {
    return resposta.status(200).json(bancoDeDadosPets);
}

function funcaoQueValidaOCadastroDoPet(requisicao, resposta, next) {
    const pet = requisicao.body;

    if (!pet.onde) {
        return resposta.status(400).json('The pet must have an address');
    }

    if (!pet.infoadd) {
        return resposta.status(400).json('The pet must have additional information');
    }

    next();
}

function funcaoQueVaiSerChamadaAoChamarUrlDePets(requisicao, resposta) {
    const pet = requisicao.body;
    pet.id = gerarUUID();
    bancoDeDadosPets.push(pet);
    return resposta.status(200).json(pet);
}