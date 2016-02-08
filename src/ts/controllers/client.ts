import express = require('express');
import Client = require('../models/client')

class BaseController{
	constructor(){
		this.list = this.list.bind(this);
	}
	list(req: express.Request, res: express.Response) {
		console.log("Base List");
	}
}

class ClientController extends BaseController{
	clients: Client[];
	constructor(){
		super();
		this.clients = [
			{ id: 1, name: "pepe" },
			{ id: 3, name: "mongo" },
			{ id: 2, name: "juan" }
		];
	}
	list (req: express.Request , res: express.Response) {
		super.list(req, res);
		res.status(200).send(this.clients);
	}
}

export = ClientController;