const mongoose = require("mongoose");
const connectToDatabase = async () => {
	await mongoose.connect(
		`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@learn.xw67jky.mongodb.net/database?retryWrites=true&w=majority`,
		(err) => {
			if (err)
				return console.log(
					"Houve um erro ao se conectar com o banco de dados:",
					err
				);
			console.log("Conexão realizada com sucesso!");
		}
	);
};

module.exports = connectToDatabase;
