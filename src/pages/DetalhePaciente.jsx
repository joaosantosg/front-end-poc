import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import './paciente.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PacienteDetalhes = ({ patients }) => {
  const { cpf } = useParams();
  const patient = patients.find((p) => p.cpf === cpf);

  if (!patient) {
    return <div>Paciente não encontrado</div>;
  }

  return (
    <div className="App">
      <div className="container paciente-detalhes">
        <header className="header">
          <Link to="/pacientes" className="link-voltar">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <h1 className="titulo">Detalhes do Paciente</h1>
        </header>
        <div>
          <p><strong>Nome Completo:</strong> {patient.nome}</p>
          <p><strong>Data de Nascimento:</strong> {patient.data_nasc}</p>
          <p><strong>Gênero:</strong> {patient.sexo}</p>
          <p><strong>Cor:</strong> {patient.cor == 'preto' ? 'Preto' : patient.cor == 'branco' ? 'Branco' : patient.cor == 'vermelho' ? 'Pardo' : patient.cor == 'amarelo' ? 'Amarelo' : 'Indígena'}</p>
          <p><strong>CPF:</strong> {patient.cpf}</p>
          <p><strong>Nome da Mãe:</strong> {patient.mae}</p>
          <p><strong>Nome do Pai:</strong> {patient.pai}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Celular:</strong> {patient.celular}</p>
          <p><strong>CEP:</strong> {patient.cep}</p>
          <p><strong>UF:</strong> {patient.estado}</p>
          <p><strong>Município:</strong> {patient.cidade}</p>
          <p><strong>Endereço:</strong> {patient.endereco}</p>
          <p><strong>Número:</strong> {patient.numero}</p>
        </div>
      </div>
    </div>
  );
};

export default PacienteDetalhes;
