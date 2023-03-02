import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/sample')
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Fart: {message}</h1>
    </div>
  );
}

export default App;