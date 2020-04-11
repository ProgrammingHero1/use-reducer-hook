import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PatientReducer from './components/PatientReducer/PatientReducer';
import PatientManagement from './components/PatientManagement/PatientManagement';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>  
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
