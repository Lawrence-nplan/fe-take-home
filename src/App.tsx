import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import InsightList from "./components/InsightList";

function App() {
  const HTTPLink = new HttpLink({ uri: "http://localhost:3000/" });

  const client = new ApolloClient({
    link: ApolloLink.from([HTTPLink]),
    cache: new InMemoryCache(),
  });

  return (
    <div className="app">
      <ApolloProvider client={client}>
        <InsightList />
      </ApolloProvider>
    </div>
  );
}

export default App;
