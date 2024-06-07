import { CliCommand } from "@/components/code-components/CliCommand";
import MainHeader from "@/components/headers/MainHeader";
import CodeSnippet from "@/components/islands/CodeSnippet";
import { Segment } from "@/components/segments/Segment";
import { Code, Divider, Text, VStack } from "@chakra-ui/react";

export default function Sqlite() {
  return (
    <>
      <VStack>
        <MainHeader title="Sqlite3" sub_title="querying made easy" />
        <Segment title="Basics">
          <CliCommand>npm i sqlite3</CliCommand>
          <Text>Sqlite is great for most use cases, so for small-medium proyects,
            this might be good enough!</Text>
          <Text>When using sqlite, you first need to define your database and how the data will be stored</Text>
          <CodeSnippet filename="/index-ws.js">
            {"const sqlite = require('sqlite3');"}
            {"const db = new sqlite.Database(':memory:');"}
          </CodeSnippet>
          <Text>The name is special, it makes sqlite create an in-memory cached database
            that will only persist for as long as the program is running.</Text>
          <Divider my="1rem" />
          <CodeSnippet filename="/index-ws.js">
            {"..."}
            {"db.serialize(() => {"}
            {"  db.run(`"}
            {"    CREATE TABLE players ("}
            {"      name TEXT"}
            {"      health INT"}
            {"    )"}
            {"  `);"}
            {"});"}
          </CodeSnippet>
          <Text>The serialize method ensures the correct execution of what is inside the closure.
            In order to avoid data races or data corruption in case some other process is trying to
            read or write into a table that hasn't been created yet.</Text>
          <Divider my="1rem" />
          <Text>It's also good practice to create functions that execute pre-made queries and to 
            always avoid dynamic execution of queries as this can be a security hazzard.</Text>
          <CodeSnippet filename="/index-ws.js">
            {"..."}
            {"const addPlayer = (name) => {"}
            {"  db.run(`"}
            {"    INSERT INTO players (name, health)"}
            {"    VALUES (${name}, 100)"}
            {"  `);"}
            {"};"}
          </CodeSnippet>
        </Segment> 
        
        <Segment title="Using rows from a SELECT query">
          <Text>When we have a query that might bring many results, we can use a method on the database
            object that will be useful.</Text>
          <CodeSnippet filename="/index-ws.js">
            {"const getAllPlayers = () => {"}
            {"  const players = [];"}
            {"  let idx = 0;"}
            {"  db.each('SELECT * FROM players)', (err, row) => {"}
            {"    console.log(row);"}
            {"    players.push(row);"}
            {"    idx++;"}
            {"  });"}
            {"  return players;"}
            {"}"}
          </CodeSnippet>
        </Segment>

        <Segment title="Callback interlude">
          <Text>Currently I stoped and thought about how using the .each method in the Database class.</Text>
          <Text>Think about how the callback as an argument is working, we can pass an environment with a 
            certain behavior as a parameter to a function, but we are defining how the function will deal
            with the information that it can provide.</Text>
          <CodeSnippet filename="sqlite3/Database.js">
            {"  ..."}
            {"  function each(sql, callback) {"}
            {"    // 1. execute query"}
            {"    const (result, err) = this.query(sql);"}
            {"    "}
            {"    // 2. use callback with information retrieved from the query"}
            {"    callback(err, result);   // notice the arguments"}
            {"  }"}
          </CodeSnippet>
          <Text>
            What is interesting is that the parameters that we use in the anonimous function
            creation are the actual arguments passed to the function when it is used in the body of 
            the "each" function.
          </Text>
          <Text>Now notice the types of the callback function itself.</Text>
          <Code>{"((this: sqlite.RunResult, err: Error | null) | undefined) => void"}</Code>
          <Text>As clear as day. The callback can or can not be there. ("| undefined")</Text>
          <Text>The method does not return anything but we can still save the data that it 
            might return as RunResult. And we can check if an error happened in the case where
            it's not null.</Text>
          <Text>Having the callback typed can be very useful!</Text>
        </Segment>

      </VStack>
    </>
  )
}
