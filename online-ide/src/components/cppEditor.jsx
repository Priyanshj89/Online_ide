import React, { useState } from 'react';
import './compiler.css';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';

const Cpp = () => {
	const [code, setCode] = useState();
	const [input, setInput] = useState();
	const [output, setOutput] = useState();
	const [load, setLoad] = useState(null);

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

	return (
		<div>
			<div style={{ display: 'flex' }}>
				<div>
					<div style={{ fontWeight: '800' }}> Type your code here</div>

					<AceEditor
						mode="c_cpp"
						theme="monokai"
						placeholder="write your code here"
						onChange={value => {
							//console.log(value);
							setCode(String(value));
							//console.log(code);
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
		</div>
	);
};

export default Cpp;
