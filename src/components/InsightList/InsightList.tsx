import { useQuery, gql } from "@apollo/client";
import { Insight } from "../../types/Insight";
import InsightCard from "../InsightCard";

const InsightList = () => {
  const { data } = useQuery<{ allInsights: Insight[] }>(gql`
    {
      allInsights {
        id
        displayName
      }
    }
  `);

  return (
    <>
      <div className="insight-list-title">Proposed Risks</div>
      <div className="insights-list">
        {data?.allInsights &&
          data.allInsights.map((insight) => (
            <InsightCard title={insight.displayName} />
          ))}
      </div>
    </>
  );
};

export default InsightList;
