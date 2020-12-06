import React, { useState } from 'react';
import './compiler.css';
import '../App.css';

import AceEditor from 'react-ace';
import { hello } from './pyCodes';

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';

const Python = () => {
	const [code, setCode] = useState();
	const [input, setInput] = useState();
	const [output, setOutput] = useState();
	const [load, setLoad] = useState(null);

	let x = 1;

	const compilecode = () => {
		fetch('/python', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				code: code,
				input: input
			})
		})
			.then(res => res.json())
			.then(data => {
				//console.log(String(data.output));
				setOutput(data);
			})
			.catch(err => {
				//console.log(err);
				setOutput(err);
			});
	};

	const onChange = newValue => {
		setCode(String(newValue));
	};

	return (
		<div>
			<div style={{ display: 'flex' }}>
				<div>
					<div style={{ fontWeight: '800' }}> Type your code here</div>

					<AceEditor
						mode="python"
						theme="monokai"
						value={code}
						placeholder="write your code here"
						onChange={value => {
							//console.log(value);
							setCode(String(value));
							//console.log(code);
						}}
						setOptions={{
							enableBasicAutocompletion: true,
							enableLiveAutocompletion: true,
							enableSnippets: true
						}}
						className="editor"
						fontSize="20px"
					/>
					<div style={{ display: 'flex', marginLeft: '30px' }}>
						<button
							className="build-button"
							onClick={() => {
								compilecode();
								setOutput(null);
								setLoad('Loading...');
							}}
						>
							Build and Run
						</button>
						<button
							className="clearButton"
							onClick={() => {
								setLoad(null);
								setOutput(null);
							}}
						>
							Clear Output
						</button>
						<button
							className="clearEditorButton"
							onClick={() => {
								onChange('');
							}}
						>
							Clear Editor
						</button>
					</div>
				</div>
				<div>
					<div style={{ fontWeight: '800' }}>Input</div>
					<textarea
						className="input"
						onChange={e => {
							setInput(String(e.target.value));
							//console.log(input);
						}}
						placeholder="Enter Input here"
					></textarea>
					<div style={{ fontWeight: '800' }}>Output</div>
					<div className="output" placeholder="output">
						{output ? (
							<div>
								<pre>{String(output.output)}</pre>
							</div>
						) : (
							load
						)}
					</div>
				</div>
			</div>
			<div>
				<h1>Some Practice Codes</h1>
				<div className="practice-code">
					<div className="practice-text">{x++}] Starting Hello World Program</div>
					<button
						className="practice-view-button"
						onClick={() => {
							onChange(hello);
							setLoad(null);
							setOutput(null);
						}}
					>
						CLICK TO VIEW
					</button>
				</div>
			</div>
		</div>
	);
};

export default Python;
