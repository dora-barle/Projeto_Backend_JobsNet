const mongoose = require('mongoose');

const CandidatoSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true},
    cargoPretendido: { type: String, unique: false, required: false},
    mes: { type: String, unique: false, required: true},
    dia: { type: String, unique: false, required: true},
    ano: { type: String, unique: false, required: true},
    estadoCivil: { type: String, unique: false, required: false},
    sexo: { type: String, unique: false, required: false},
    email: { type: String, unique: true, required: false},
    cep: { type: String, unique: false, required: false},
    endereco: { type: String, unique: false, required: true},
    bairro: { type: String, unique: false, required: true},
    cidade: { type: String, unique: false, required: true},
    celular: { type: String, unique: false, required: false},
    contato: { type: String, unique: false, required: false},
    telefoneFixo1: { type: String, unique: false, required: false},
    telefoneFixo2: { type: String, unique: false, required: false},
    contato: { type: String, unique: false, required: false},
    identidade: { type: String, unique: true, required: true},
    cpf: { type: String, unique: true, required: true},
    veiculo: { type: String, unique: false, required: false},
    habilitacao: { type: String, unique: false, required: false},
}, {
    timestamps:true
});

module.exports = mongoose.model('Candidato', CandidatoSchema);

