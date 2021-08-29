const Candidato = require('../models/Candidato');


module.exports = {

    async registro(req, res){
    
        const { nome, cargoPretendido, mes, dia, ano, estadoCivil, sexo, email, cep, endereco, bairro, cidade, celular, telefoneFixo1, telefoneFixo2, 
            contato, identidade, cpf, veiculo, habilitacao } = req.body;

        const newCandidato = new Candidato();
        

        newCandidato.nome = nome;
        newCandidato.cargoPretendido = cargoPretendido;
        newCandidato.mes = mes;
        newCandidato.dia = dia;
        newCandidato.ano = ano;
        newCandidato.estadoCivil = estadoCivil;
        newCandidato.sexo = sexo;
        newCandidato.email = email;
        newCandidato.cep = cep;
        newCandidato.endereco = endereco;
        newCandidato.bairro = bairro;
        newCandidato.cidade = cidade;
        newCandidato.celular = celular;
        newCandidato.telefoneFixo1 = telefoneFixo1;
        newCandidato.telefoneFixo2 = telefoneFixo2;
        newCandidato.contato = contato;
        newCandidato.identidade = identidade;
        newCandidato.cpf = cpf;
        newCandidato.veiculo = veiculo;
        newCandidato.habilitacao = habilitacao;



        newCandidato.save((err, savedCandidato) => {
            if (err) {
                console.log(err);
                return res.status(500).send('O registro nao foi salvo');
            }

            return res.status(200).send(savedCandidato);
        });


    },
};