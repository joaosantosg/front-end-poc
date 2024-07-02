import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PacientesPage from './pages/Pacientes';
import PacienteDetalhes from './pages/DetalhePaciente';
import pacientes from './pages/pacientes';
function App() {
  
  

  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pacientes" element={<PacientesPage />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/paciente/:cpf" element={<PacienteDetalhes patients={pacientes} />} />
      </Routes>
  );
}

export default App;
