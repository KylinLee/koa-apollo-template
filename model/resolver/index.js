const booksData = require("../../data/index.js");
const resolvers = {
    Query: {
        books: () => booksData
    }
}
module.exports = resolvers;