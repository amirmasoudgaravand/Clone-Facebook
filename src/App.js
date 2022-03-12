
import './App.css';

import Login from './Login';
import { useState } from 'react';
function App() {
  {/* const user = null; */ }

  {/* agar user null or false bod bayad login konad else vared safheh mishavad 
      hata agar yek strign bashad vard misahvad*/}

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
