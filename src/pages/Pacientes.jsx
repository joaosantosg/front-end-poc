import React from 'react';
import '../App.css';
import './paciente.css';
import { Link } from 'react-router-dom/dist';

function PacientesPage() {
  const patients = [
    {
      "DataNascimento": "30/01/1980",
      "NomeCompleto": "Francisco do Amaral",
      "Genero": "Masculino",
      "Cor": "Branca",
      "CPF": "78618984070",
      "NomeMae": "Maria Rosária Costa",
      "NomePai": "Paulo Vini Larga",
      "Email": "franciscodoamaral7334@uorak.com",
      "Celular": "61949643915",
      "CEP": "70670-108",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "SQSW 101 Bloco 'H'",
      "NumeroRua": "123"
    },
    {
      "DataNascimento": "25/08/1995",
      "NomeCompleto": "Ana Silva",
      "Genero": "Feminino",
      "Cor": "Parda",
      "CPF": "12345678900",
      "NomeMae": "Sandra Silva",
      "NomePai": "Carlos Silva",
      "Email": "anasilva@example.com",
      "Celular": "61987654321",
      "CEP": "70000-000",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "SHIN QL 10 Conjunto 9 Casa 5",
      "NumeroRua": "456"
    },
    {
      "DataNascimento": "10/03/1988",
      "NomeCompleto": "José da Silva",
      "Genero": "Masculino",
      "Cor": "Negra",
      "CPF": "98765432100",
      "NomeMae": "Antonia Souza",
      "NomePai": "José da Silva",
      "Email": "josesilva@example.com",
      "Celular": "61955556666",
      "CEP": "72500-000",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "Quadra 500 Conjunto 10",
      "NumeroRua": "789"
    },
    {
      "DataNascimento": "15/06/1985",
      "NomeCompleto": "Maria Oliveira",
      "Genero": "Feminino",
      "Cor": "Indígena",
      "CPF": "45678912300",
      "NomeMae": "Joana Oliveira",
      "NomePai": "Pedro Oliveira",
      "Email": "maria.oliveira@example.com",
      "Celular": "61888887777",
      "CEP": "71000-000",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "CLN 405 Bloco C",
      "NumeroRua": "321"
    },
    {
      "DataNascimento": "02/11/1990",
      "NomeCompleto": "Carlos Santos",
      "Genero": "Masculino",
      "Cor": "Amarela",
      "CPF": "65432198700",
      "NomeMae": "Fernanda Santos",
      "NomePai": "Ricardo Santos",
      "Email": "carlos.santos@example.com",
      "Celular": "61933334444",
      "CEP": "71500-000",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "SHIS QI 5 Conjunto 9 Casa 3",
      "NumeroRua": "111"
    },
    {
      "DataNascimento": "20/04/1983",
      "NomeCompleto": "Fernanda Souza",
      "Genero": "Feminino",
      "Cor": "Branca",
      "CPF": "14725836900",
      "NomeMae": "Patrícia Souza",
      "NomePai": "Luiz Souza",
      "Email": "fernanda.souza@example.com",
      "Celular": "61822223333",
      "CEP": "72000-000",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "SQN 202 Bloco D",
      "NumeroRua": "222"
    },
    {
      "DataNascimento": "12/09/1992",
      "NomeCompleto": "João Oliveira",
      "Genero": "Masculino",
      "Cor": "Parda",
      "CPF": "36925814700",
      "NomeMae": "Luciana Oliveira",
      "NomePai": "Marcos Oliveira",
      "Email": "joao.oliveira@example.com",
      "Celular": "61999990000",
      "CEP": "73000-000",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "SQS 108 Bloco E",
      "NumeroRua": "333"
    },
    {
      "DataNascimento": "05/07/1987",
      "NomeCompleto": "Luana Costa",
      "Genero": "Feminino",
      "Cor": "Negra",
      "CPF": "25836914700",
      "NomeMae": "Vanessa Costa",
      "NomePai": "Rafael Costa",
      "Email": "luana.costa@example.com",
      "Celular": "61966665555",
      "CEP": "74000-000",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "SHCGN 706 Bloco E",
      "NumeroRua": "444"
    },
    {
      "DataNascimento": "18/12/1984",
      "NomeCompleto": "Paulo Pereira",
      "Genero": "Masculino",
      "Cor": "Amarela",
      "CPF": "96385274100",
      "NomeMae": "Márcia Pereira",
      "NomePai": "Antônio Pereira",
      "Email": "paulo.pereira@example.com",
      "Celular": "61811112222",
      "CEP": "75000-000",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "SRES Quadra 1 Bloco B",
      "NumeroRua": "555"
    },
    {
      "DataNascimento": "08/02/1991",
      "NomeCompleto": "Camila Lima",
      "Genero": "Feminino",
      "Cor": "Branca",
      "CPF": "85296374100",
      "NomeMae": "Carla Lima",
      "NomePai": "José Lima",
      "Email": "camila.lima@example.com",
      "Celular": "61977778888",
      "CEP": "76000-000",
      "UF": "DF",
      "Municipio": "BRASÍLIA",
      "Rua": "SQN 402 Bloco A",
      "NumeroRua": "666"
    }
  ]
  

  return (
    <div className="App">
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
          {patients.map(patient => (
            <tr key={patient.CPF}>
              <td>
                <Link to={`/paciente/${patient.CPF}`}>{patient.NomeCompleto}</Link>
              </td>
              <td>{patient.CPF}</td>
              <td>{patient.Email}</td>
              <td>{patient.Celular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PacientesPage;
