const express = require("express");

const app = express();
require("./routing/htmlRoutes.js")(
    app
)
const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
})