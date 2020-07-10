const { gql } = require("apollo-server-koa");
const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`;
module.exports = typeDefs;