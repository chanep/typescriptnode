import express = require('express');

class ClientController {
	list(req: express.Request , res: express.Response){
		var clients = [
			{id: 1, name: "pepe"},
			{id: 2, name: "juan"}
		]
		res.status(200).send(clients);
	}
}

export = ClientController;