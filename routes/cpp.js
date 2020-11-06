const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/cpp', (req, res) => {
	const { code } = req.body;
	const { input } = req.body;
	axios({
		method: 'post',
		url: 'https://api.jdoodle.com/v1/execute',
		data: {
			clientId: '4ee7b96f13edd095dc61987f2d032b49',
			clientSecret: 'e19589cb126927d52f46128b3ea6d26ef12035306bf01c6b17e026d9765a1212',
			script: code,
			stdin: input,
			language: 'cpp',
			versionIndex: '0'
		}
	})
		.then(response => {
			//console.log(code);
			//console.log(input);
			//console.log(response);
			res.status(200).json({
				output: response.data.output,
				memory: response.data.memory,
				statusCode: response.data.statusCode,
				cpuTIme: response.data.cpuTIme
			});
		})
		.catch(err => {
			//console.log(err);
			res.status(400).json({
				error: response.data.error,
				statusCode: response.data.statusCode
			});
		});
});

router.post('/java', (req, res) => {
	const { code } = req.body;
	const { input } = req.body;
	//const c = String(code);
	//console.log(c);
	axios({
		method: 'post',
		url: 'https://api.jdoodle.com/v1/execute',
		data: {
			clientId: '4ee7b96f13edd095dc61987f2d032b49',
			clientSecret: 'e19589cb126927d52f46128b3ea6d26ef12035306bf01c6b17e026d9765a1212',
			script: code,
			stdin: input,
			language: 'java',
			versionIndex: '0'
		}
	})
		.then(response => {
			//console.log(response.data);
			//console.log(code);
			res.status(200).json({
				output: response.data.output,
				memory: response.data.memory,
				statusCode: response.data.statusCode,
				cpuTIme: response.data.cpuTIme
			});
		})
		.catch(err => {
			//console.log(err);
			res.status(400).json({
				error: response.data.error,
				statusCode: response.data.statusCode
			});
		});
});

router.post('/python', (req, res) => {
	const { code } = req.body;
	const { input } = req.body;
	//console.log(code);
	axios({
		method: 'post',
		url: 'https://api.jdoodle.com/v1/execute',
		data: {
			clientId: '4ee7b96f13edd095dc61987f2d032b49',
			clientSecret: 'e19589cb126927d52f46128b3ea6d26ef12035306bf01c6b17e026d9765a1212',
			script: code,
			stdin: input,
			language: 'python3',
			versionIndex: '0'
		}
	})
		.then(response => {
			//console.log(response.data);
			res.status(200).json({
				output: response.data.output,
				memory: response.data.memory,
				statusCode: response.data.statusCode,
				cpuTIme: response.data.cpuTIme
			});
		})
		.catch(err => {
			//console.log(err);
			res.status(400).json({
				error: response.data.error,
				statusCode: response.data.statusCode
			});
		});
});

module.exports = router;
