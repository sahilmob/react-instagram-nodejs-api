const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("img"));

const port = process.env.PORT || 3000;

let images = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
	"24",
	"25",
	"26",
	"27",
	"28",
	"29"
];

app.post("/login", (req, res) => {
	const imgArr = [];
	const body = req.body;
	let { username, password } = _.pick(body, ["username", "password"]);
	const userNameRegex = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	if (userNameRegex.test(username) && passwordRegex.test(password)) {
		for (let i = 0; i < 12; i++) {
			images.sort(function() {
				return 0.5 - Math.random();
			});
			const portString = process.env.PORT ? "" : `:${port}`;
			imgArr.push(`https://${req.hostname}${portString}/${images[0]}.jpg`);
		}
		res.status(200).json(imgArr);
	} else {
		res.status(400).send({
			message: "Username and/or password are invalid"
		});
	}
});

app.get("/images", (req, res) => {
	const imgArr = [];
	for (let i = 0; i < 12; i++) {
		images.sort(function() {
			return 0.5 - Math.random();
		});
		const portString = process.env.PORT ? "" : `:${port}`;
		imgArr.push(`https://${req.hostname}${portString}/${images[0]}.jpg`);
	}
	res.json(imgArr);
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
