import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import pacientes from './pacientes';

function PacientesPage() {
  return (
    <div className='container'>
      <header>
        <h1>Lista de Pacientes</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Celular</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((patient, index) => (
            <tr key={patient.cpf}>
              <td className={index % 2 === 0 ? 'claro' : 'escuro'}>
                <Link to={`/paciente/${patient.cpf}`}>{patient.nome}</Link>
              </td>
              <td className={index % 2 === 0 ? 'claro' : 'escuro'}>{patient.cpf}</td>
              <td className={index % 2 === 0 ? 'claro' : 'escuro'}>{patient.email}</td>
              <td className={index % 2 === 0 ? 'claro' : 'escuro'}>{patient.celular}</td>
              <td className={index % 2 === 0 ? 'claro' : 'escuro'}>{patient.cor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        <p>Quantidade de pacientes: {pacientes.length}</p>
      </footer>
    </div>
  );
}

export default PacientesPage;
