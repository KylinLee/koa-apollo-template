const resolvers = {
    Query: {
        async books(_source, _args, { dataSources }) {
            // 父解析器结果
            console.log(_source);
            // 参数
            console.log(_args);
            // 上下文对象
            console.log(dataSources.db.context)
            console.log(dataSources.db.context.uid) // 20202020
            return dataSources.db.getAllBooks();
        },
    },
};
module.exports = resolvers;