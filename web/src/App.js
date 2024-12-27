import { useState } from 'react';
import './styles/App.css';
import './styles/reset.css';
import { makeRequest } from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';

function App() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([{ user: 'gpt', message: 'Como posso te ajudar hoje?' }]);

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <h1>App Works!!</h1>
    </div>
  );
}

export default App;
