const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname, './typeDefs'), { extensions: ['graphql'] })

console.log('typesArray', typesArray)

const resolversArray = loadFilesSync(path.join(__dirname, './resolvers/**/*.resolvers.*'))

const typeDefs = mergeTypeDefs(typesArray)
const resolvers = mergeResolvers(resolversArray)

console.log('resolvers', resolvers)



const schema = makeExecutableSchema({typeDefs, resolvers})

module.exports = schema