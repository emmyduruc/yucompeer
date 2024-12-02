import { Provider } from '@/schema/tools.schema';
import React from 'react';

type TableProps = {
  providers: Provider[];
};

const Table: React.FC<TableProps> = ({ providers }) => {
  return (
    <div className="p-4 overflow-x-auto w-full">
      <div className="flex gap-4 w-full h-full">
        {providers?.map((provider) => (
          <div
            key={provider.name}
            className="min-w-[400px] max-w-[400px] min-h-[800px] border-4 border-green-200 shadow-lg rounded-xl p-4 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <img
                src={provider.imageUrl}
                alt={provider.name}
                className="h-20 w-20 object-contain mr-4"
              />
              <h2 className="text-xl font-bold font-mono text-gray-800">
                {provider.name}
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-4 font-mono">
              {provider.description}
            </p>
            <p className="text-sm font-mono text-black-500 mb-4">
              <strong>Features:</strong>{' '}
              {provider?.features.join(', ') || 'N/A'}
            </p>
            <p className="text-sm font-mono text-black-500 mb-4">
              <strong>Fits For:</strong> {provider?.fitsFor.join(', ') || 'N/A'}
            </p>
            <p className="text-sm font-mono text-black-500 mb-4">
              <strong>Skill Level:</strong> {provider?.skillLevel || 'N/A'}
            </p>
            <div>
              <h3 className="text-md font-mono font-semibold mb-2 text-gray-700">
                Pricing Tiers
              </h3>
              <div className="space-y-4 font-mono">
                {provider.pricingTiers.map((tier) => (
                  <div
                    key={tier.tierName}
                    className="bg-gray-100 border-l-4 p-3 rounded shadow-xl"
                    style={{
                      borderColor: tier.limitations ? 'red' : 'green',
                    }}
                  >
                    <h4 className="text-md font-bold text-gray-800 my-2">
                      {tier.tierName}
                    </h4>
                    <p className="text-sm text-gray-600 my-1">
                      <strong>Price:</strong> ${tier.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Features:</strong> {tier.features.join(', ')}
                    </p>
                    {tier.limitations ? (
                      <p className="text-sm text-red-500 my-2">
                        <strong>Limitations:</strong> {tier.limitations}
                      </p>
                    ) : (
                      <p className="text-sm text-green-500">
                        <strong>Limitations:</strong> None
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
