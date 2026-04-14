import React from 'react';
import Dashboard from './components/Dashboard';
import FinancialReflection from './components/FinancialReflection';
import AIAnalysis from './components/AIAnalysis';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FinAura</h1>
        <p>Your financial aura, visualized and reflected.</p>
      </header>
      <main>
        <Dashboard />
        <FinancialReflection />
        <AIAnalysis />
      </main>
    </div>
  );
}

export default App;
