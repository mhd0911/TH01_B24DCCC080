import React, { useState } from 'react';

function TextCounter() {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Text Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập văn bản..."
        rows={5}
        cols={40}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

export default TextCounter;
