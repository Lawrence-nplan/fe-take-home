import { Insight } from "../../types/Insight";
import InsightCard from "../InsightCard";

type InsightListProps = {
  insights?: Insight[];
};

const InsightList = ({ insights }: InsightListProps) => {
  return (
    <>
      <div className="insight-list-title">Proposed Risks</div>
      <div className="insights-list">
        {insights &&
          insights.map((insight) => (
            <InsightCard title={insight.displayName} />
          ))}
      </div>
    </>
  );
};

export default InsightList;
