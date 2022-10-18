import React from 'react';
import './App.css';

// Impoted components
import InputField from './components/InputField';


// React.FC tell to typescript that this app is functional components
const App: React.FC = () =>  {

  
  
  return (
   <div className='App'>
    <h1 className='heading'>
      Taskify
    </h1>
    <InputField />
   </div>
  );
}

export default App;
