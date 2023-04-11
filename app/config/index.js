const config = {
    app: {
        PORT: process.env.PORT || 3000
    },
    db: {
        uri: process.env.MONGO_DB || 'mongodb://localhost:27017/netfix'
    }

}

module.exports = config;