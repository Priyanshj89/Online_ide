import React, { useState } from 'react';
import './App.css';
import Editor from './components/javaEditor';
import Editor1 from './components/cppEditor';
import Editor2 from './components/pythonEditor';

function App() {
	const [lang, setLang] = useState('C++');
	return (
		<div className="App">
			<div style={{ display: 'flex', margin: '30px', textAlign: 'center', justifyContent: 'center' }}>
				<div style={{ fontWeight: '800', fontSize: '30px' }}>Online {lang} IDE</div>
				<div className="dropdown">
					<div className="container">Language: {lang}</div>
					<div className="dropdown-content">
						<div
							className="lang"
							onClick={() => {
								setLang('C++');
							}}
						>
							C++
						</div>
						<div
							className="lang"
							onClick={() => {
								setLang('Java');
							}}
						>
							Java
						</div>
						<div
							className="lang"
							onClick={() => {
								setLang('Python');
							}}
						>
							Python
						</div>
					</div>
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<div>{lang == 'C++' ? <Editor1 /> : lang == 'Java' ? <Editor /> : <Editor2 />}</div>
			</div>
		</div>
	);
}

export default App;
