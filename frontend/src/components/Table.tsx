import React from 'react';

type PricingTier = {
  tierName: string;
  price: number;
  features: string[];
  limitations: string | null;
};

type Tool = {
  name: string;
  description: string;
  skillLevel: string;
  imageUrl: string;
  pricingTiers: PricingTier[];
};

type TableProps = {
  tools: Tool[];
};

const Table: React.FC<TableProps> = ({ tools }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Skill Level</th>
            <th className="border border-gray-300 px-4 py-2">Pricing Tiers</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.name}>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={tool.imageUrl}
                  alt={tool.name}
                  className="h-12 w-12 object-contain"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{tool.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {tool.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {tool.skillLevel}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {tool.pricingTiers.map((tier) => (
                  <div key={tier.tierName}>
                    <strong>{tier.tierName}:</strong> ${tier.price} -{' '}
                    {tier.features.join(', ')}{' '}
                    {tier.limitations && (
                      <span>(Limitations: {tier.limitations})</span>
                    )}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;