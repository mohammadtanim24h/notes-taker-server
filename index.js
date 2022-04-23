const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//noteTakerAdmin
//TPTGWDgtaRAyi7Jf

app.get("/", (req, res) => {
    res.send("Notes taker server is up and running");
});

app.listen(port, () => {
    console.log("Listening to port", port);
});
