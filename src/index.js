const {GraphQLServer} = require("graphql-yoga")

let links = [{
    id: "link-0",
    url: "www.howtographql.com",
    description: "Full Stack Tutorial for GraphQL"
}, {
    id: "link-1",
    url: "www.rhulabs.com",
    description: "Full Stack Tutorial for GraphQL implementation"
}]


const resolvers = {
    Query: {
        info: () => `This is a test API`,
        feed: () => links
    },

    Link: {
        id: (root) => root.id,
        description: (root) => root.description,
        url: (root) => root.url
    }

}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers
})

server.start(() => console.log("Server is running on localhost port 4000")) 
