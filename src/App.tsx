import InsightList from "./components/InsightList";
import { Insight } from "./types/Insight";

function App() {
  return (
    <div className="app">
      <InsightList insights={insights} />
    </div>
  );
}

export default App;
