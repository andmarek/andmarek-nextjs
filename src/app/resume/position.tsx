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
    <div className="space-y-8">
      {positions.map((position, index) => (
        <div key={index} className="border-2 p-6 bg-licorice rounded-lg">
          <h2 className="text-papaya-whip text-2xl font-extrabold tracking-tight">
            <span className="font-extrabold text-cinereous">{position.name}</span> - <span className="text-moss-green">{position.entity}</span>
          </h2>
          <p className="text-sm font-mono text-cinereous mt-1">
            {position.from} to {position.to}
          </p>
          <ul className="list-disc list-inside mt-4 text-champagne-pink pl-4 leading-7">
            {position.responsibilities.map((r, i) => (
              <li key={i} className="mb-2">
                {r}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
