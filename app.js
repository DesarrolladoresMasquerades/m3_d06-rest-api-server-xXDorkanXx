require("dotenv/config");
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const projectRouter = require("./routes/project.routes"); // <== IMPORT
app.use("/api", projectRouter); // <== ADD

require("./error-handling")(app);

module.exports = app;
