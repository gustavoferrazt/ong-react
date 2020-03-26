//importando a conexão com o banco de dados
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {


  async index(req, res){
    const ongs = await connection('ongs').select('*');
    return res.json(ongs); 
  },

  

  async create(req, res){
    // Pega os dados de um Array e armazena nas seguintes variáveis.
    const {name, email, whatsapp, city, uf} = req.body;
    // Cria um ID com 4 caratectere em forma de número e letra aleatório
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name, 
      email,
      whatsapp,
      city,
      uf,
    })

    return res.json({ id });
  }
};