const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/editor', (req, res) => {
    res.send({express:'express server connected to react'});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});