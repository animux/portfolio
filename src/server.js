const Express = require('express');
const fs = require('fs');

const App = Express();

App.use(Express.static('./dist'));

App.get('/', (request, response) => {
	response.send(fs.readFileSync('./dist/index.html').toString());
	return response.end();
});

App.get('/facebook', (request, response) => {
	response.re
})

App.listen(80, () => console.log('Listening...'));