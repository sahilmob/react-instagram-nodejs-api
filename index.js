const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "img")));

const port = process.env.PORT || 3000;

const images = ["1.jgp", "2.jpg", "3.jpg", "4.jgp", "5.jpg", "6.jpg"];

app.post("/login", (req, res) => {
	const imgArr = [];

	for (let i = 0; i < 3; i++) {
		images.sort(function() {
			return 0.5 - Math.random();
		});
		const portString = process.env.PORT ? null : `:${port}`;
		imgArr.push(`${req.hostname}${portString}/${images[0]}`);
	}
	res.json(imgArr);
});

app.get("/login", (req, res) => {
	const imgArr = [];
	for (let i = 0; i < 3; i++) {
		images.sort(function() {
			return 0.5 - Math.random();
		});
		const portString = process.env.PORT ? null : `:${port}`;
		imgArr.push(`${req.hostname}${portString}/${images[0]}`);
	}
	res.json(imgArr);
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
