import InsightList from "./components/InsightList";
import { Insight } from "./types/Insight";

const insights: Insight[] = [
  { uid: "1", displayName: "Insight 1" },
  { uid: "2", displayName: "Insight 2" },
  { uid: "3", displayName: "Insight 3" },
];

function App() {
  return (
    <div className="app">
      <InsightList insights={insights} />
    </div>
  );
}

export default App;
