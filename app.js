const express = require('express');
const cors = require('cors');
const cpp = require('./routes/cpp');
const path = require('path');

const app = express(); //invoking express
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //order matters, first parse then routing
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(cpp);

app.listen(PORT, () => {
	console.log('Server has started on port ', PORT);
});
