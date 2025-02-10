const express = require("express");

const app = express();
const PORT = 3003;

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
    console.log(res);
});

