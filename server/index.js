const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/* Middleware functions for parsing requests*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Serve public folder*/
app.use(express.static(path.join(__dirname, '..', 'public')));

/* On all routes, serve index.html file */
app.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

/* Error handling */
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});
app.use((err, req, res, next) => {
	res.status(err.status || 500).send(err.message || 'Internal Server Error');
	console.error(err);
});

/* Listener */
app.listen(process.env.PORT || 3000, () => {
	console.log('Jam session started!');
});
