import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Task {
    id: ID!
    title: String!
    description: String
    isCompleted: Boolean!
  }

  type Mutation {
    createTask(title: String!, description: String): Task!
    updateTask(id: ID!, title: String!, description: String): Task!
    deleteTask(id: ID!): Task!
  }

  type Query {
    tasks: [Task!]!
    task(id: ID!): Task
  }
    
`);

export default schema;
