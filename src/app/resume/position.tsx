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
        <div key={index} className="py-4 border-b border-gray-300">
          <div className="flex justify-between items-end">
            <h2 className="text-papaya-whip text-2xl font-semibold text-black">{position.name}</h2>
            <span className="text-champagne-pink text-sm">{position.from} - {position.to}</span>
          </div>

          <p className="text-lg text-moss-green mt-1">{position.entity}</p>

          <ul className="list-none pl-0 mt-4 text-base text-gray-700">
            {position.responsibilities.map((r, i) => (
              <li className="text-champagne-pink py-2" key={i}>
                <span className="text-champagne-pink mr-2">•</span>{r}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
