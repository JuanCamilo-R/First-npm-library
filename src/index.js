const messages = [
	"Oscar",
	"Ana",
	"Nikolai",
	"Jessica",
	"Diego",
	"Laura",
	"Caroline",
	"Juan",
	"Camilo",
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg };
