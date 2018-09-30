const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors)
app.use(bodyParser.json());
app.use(express.static("img"));

const port = process.env.PORT || 3000;

fs.readdir("./img", (err, filesDir) => {
	let files = [];
	filesDir.forEach(file => {
		files.push(file);
	});
});

app.post("/login", (req, res) => {
	const imgArr = [];

	for (let i = 0; i < 3; i++) {
		images.sort(function() {
			return 0.5 - Math.random();
		});
		const portString = process.env.PORT ? "" : `:${port}`;
		imgArr.push(`https://${req.hostname}${portString}/${images[0]}`);
	}
	res.json(imgArr);
});

app.get("/login", (req, res) => {
	const imgArr = [];
	for (let i = 0; i < 3; i++) {
		images.sort(function() {
			return 0.5 - Math.random();
		});
		const portString = process.env.PORT ? "" : `:${port}`;
		imgArr.push(`https://${req.hostname}${portString}/${images[0]}`);
	}
	res.json(imgArr);
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
