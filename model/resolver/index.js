const books = require("../../data/index.js");
const resolvers = {
    Query: {
        books: () => books,
    },
};
module.exports = resolvers;