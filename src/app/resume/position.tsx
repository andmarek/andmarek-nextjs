interface WorkPositionProps {
    name: string;
    entity: string;
    from: string;
    to: string;
    responsibilities: string[];
};

interface WorkPositionsListProps {
    positions: WorkPositionProps[];
};

export default function WorkPositions({ positions }: WorkPositionsListProps): React.JSX.Element {
    return (
        <div className="space-y-6">
            {positions.map((position, index) => (
                <div key={index} className="p-4 rounded-md">
                <h2 className="text-papaya-whip text-2xl font-bold ">{position.name} - {position.entity}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {position.from} - {position.to}
                </p>
                <ul className="list-disc list-inside mt-2 text-champagne-pink">
                  {position.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      );
}