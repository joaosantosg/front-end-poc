import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import './paciente.css'

const PacienteDetalhes = ({ patients }) => {
  const { cpf } = useParams();
  const patient = patients.find((p) => p.CPF === cpf);

  if (!patient) {
    return <div>Paciente não encontrado</div>;
  }

  return (
    <div className="App">

    <div className="container paciente-detalhes">
      <header>
        <h1>Detalhes do Paciente</h1>
      </header>
      <div>
        <p><strong>Nome Completo:</strong> {patient.NomeCompleto}</p>
        <p><strong>Data de Nascimento:</strong> {patient.DataNascimento}</p>
        <p><strong>Gênero:</strong> {patient.Genero}</p>
        <p><strong>Cor:</strong> {patient.Cor}</p>
        <p><strong>CPF:</strong> {patient.CPF}</p>
        <p><strong>Nome da Mãe:</strong> {patient.NomeMae}</p>
        <p><strong>Nome do Pai:</strong> {patient.NomePai}</p>
        <p><strong>Email:</strong> {patient.Email}</p>
        <p><strong>Celular:</strong> {patient.Celular}</p>
        <p><strong>CEP:</strong> {patient.CEP}</p>
        <p><strong>UF:</strong> {patient.UF}</p>
        <p><strong>Município:</strong> {patient.Municipio}</p>
        <p><strong>Rua:</strong> {patient.Rua}</p>
        <p><strong>Número:</strong> {patient.NumeroRua}</p>
      </div>
    </div>
    </div>
  );
};

export default PacienteDetalhes;
