const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

const port = 3000;

// call the POST add API (written in Python)
const apiPostAdd = async ({ a, b }) => {
    console.log("Calling the POST add API")
	try {
		const res = await axios.post("http://127.0.0.1:5000/add", {
			a,
			b,
		});
        const { sum } = res.data;
        console.log(`POST add API returned sum: ${sum}`)
		return sum;
	} catch (error) {
		console.log(error);
	}
};

// logic for getting average
const getAverage = async ({ a, b }) => {
	const sum = (await apiPostAdd({ a, b })) / 2;
	return sum;
};

// average handler
app.post("/average", async (req, res) => {
	console.log("JS average calculator");
    const { a, b } = req.body;
    console.log(`Received request to calculate average of ${a} and ${b}`);
	const average = await getAverage({ a, b });
	console.log(`Average is ${average}`);
	res.send({ average });
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
