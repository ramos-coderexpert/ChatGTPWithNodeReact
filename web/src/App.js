import { useState } from 'react';
import './styles/App.css';
import './styles/reset.css';
import { makeRequest } from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage';

function App() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([{ user: 'gpt', message: 'Como posso te ajudar hoje?' }]);

  async function handleSubmit(e) {}

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input className="chat-input-textarea" value={input} rows="1" onChange={e => setInput(e.target.value)} />
          </form>
        </div>
      </section>
      <h1>App Works!!</h1>
    </div>
  );
}

export default App;
