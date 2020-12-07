const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Node JS APP");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Wazzappppp");
});
