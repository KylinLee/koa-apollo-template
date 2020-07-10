const { SQLDataSource } = require("datasource-sql");

class FetchMethods extends SQLDataSource {
    getAllBooks() {
        return this.knex("books")
            .select("*")
            .then((res) => {
                console.table(res);
                return res;
            })
            .catch(() => {
                0;
            });
    }
}

module.exports = FetchMethods;