const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const port = 3001;

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});