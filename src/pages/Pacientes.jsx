import React from 'react';
import '../App.css';
import './paciente.css';
import { Link } from 'react-router-dom/dist';
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
          </tr>
        </thead>
        <tbody>
          {pacientes.map(patient => (
            <tr key={patient.CPF}>
              <td>
                <Link to={`/paciente/${patient.cpf}`}>{patient.nome}</Link>
              </td>
              <td>{patient.cpf}</td>
              <td>{patient.email}</td>
              <td>{patient.celular}</td>
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
