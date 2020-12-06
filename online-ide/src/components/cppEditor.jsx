import React, { useState } from 'react';
import './compiler.css';

import AceEditor from 'react-ace';
import { add, hello, selectionSort } from './cppCodes';

import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';

const Cpp = () => {
	const [code, setCode] = useState();
	const [input, setInput] = useState();
	const [output, setOutput] = useState();
	const [load, setLoad] = useState(null);

	let x = 1;

	const compilecode = () => {
		fetch('/cpp', {
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
		if (code) console.log(code);
	};

	return (
		<div>
			<div style={{ display: 'flex' }}>
				<div>
					<div style={{ fontWeight: '800' }}> Type your code here</div>

					<AceEditor
						mode="c_cpp"
						theme="monokai"
						placeholder="write your code here"
						value={code}
						onChange={
							//value => {
							//console.log(value);
							//setCode(String(value));
							//console.log(code);
							//}
							onChange
						}
						className="editor"
						fontSize="20px"
						setOptions={{
							enableBasicAutocompletion: true,
							enableLiveAutocompletion: true,
							enableSnippets: true
						}}
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
						) : load ? (
							load
						) : (
							''
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
				<div className="practice-code">
					<div className="practice-text">{x++}] Input 2 Numbers and print the Sum of them</div>
					<button
						className="practice-view-button"
						onClick={() => {
							onChange(add);
							setLoad(null);
							setOutput(null);
						}}
					>
						CLICK TO VIEW
					</button>
				</div>
				<div className="practice-code">
					<div className="practice-text">{x++}] Selection Sort Technique Code</div>
					<button
						className="practice-view-button"
						onClick={() => {
							onChange(selectionSort);
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

export default Cpp;
