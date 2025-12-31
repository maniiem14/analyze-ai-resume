interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeColor = '';
  let badgeText = '';

  if (score > 70 ) {
    badgeColor = 'bg-bage-green text-green-600';
    badgeText = 'Strong';
  } else if (score > 49) {
    badgeColor = 'bg-bage-yellow text-yellow-600';
    badgeText = 'Good Start';
  } else {
    badgeColor = 'bg-bage-red text-red-600';
    badgeText = 'Needs Improvement';
  }

    return (
        <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
            <p className="text-sm font-medium">{badgeText}</p>
        </div>
    );
}
export default ScoreBadge;