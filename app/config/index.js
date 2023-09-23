const config = {
    app: {
        port: process.env.PORT || 3000,
    }
};

//use mongodb
db: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactbook"
}
module.exports = config;