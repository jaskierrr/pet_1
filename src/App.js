import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
	const [text, setText] = useState('Текст');
  
  function inc() {
    setCount(count + 1)
  }

  function dec() {
    setCount(count - 1)
  }

	return (
		<div className="App">
			<h1>{count}</h1>
      <button onClick={dec}>dec</button>
      <button onClick={inc}>inc</button>

			<p>{text}</p>
			<input
				type="text"
				placeholder="Вверх"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
		</div>
	);
}

export default App;
