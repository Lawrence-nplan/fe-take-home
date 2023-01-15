type InsightCardProps = {
  title: string;
};

const InsightCard = ({ title }: InsightCardProps) => {
  return (
    <div className="insight-card">
      <div className="insight-card-title">{title}</div>
    </div>
  );
};

export default InsightCard;
