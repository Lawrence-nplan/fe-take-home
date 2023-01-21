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

  const Filter = () => (
    <div>
      Filter: <input />
    </div>
  );

  const Sort = () => (
    <div>
      Sort By:{" "}
      <select>
        <option value="name">Name</option>
        <option value="plannedEndDate">Planned Start</option>
        <option value="plannedEndDate">Planned End</option>
      </select>
    </div>
  );

  return (
    <>
      <div className="insight-list-title">Proposed Risks</div>
      <div className="insight-list-filter-sort-row">
        <Filter /> <Sort />
      </div>
      <div className="insights-list">
        {data?.allInsights?.map((insight) => (
          <InsightCard title={insight.displayName} />
        ))}
      </div>
    </>
  );
};

export default InsightList;
