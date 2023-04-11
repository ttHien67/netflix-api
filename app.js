const express = require('express');
const cors = require('cors');
const ApiError = require('./app/api-error');
const config = require('./app/config');
const mongose = require('mongoose');

const app = express();
const PORT = config.app.PORT;

app.use(cors());
app.use(express.json());

mongose.connect(config.db.uri)
    .then(() => console.log('DB connect succcessfully'))
    .catch((error) => {
        console.log(error);
    })

app.use((req, res, next) => {
    return next(new ApiError(404, 'Resourse not found'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
