import { Provider } from '@/schema/tools.schema';
import React, { useState } from 'react';

type TableProps = {
  providers: Provider[];
};

const Table: React.FC<TableProps> = ({ providers }) => {
  const [showAllDetails, setShowAllDetails] = useState(false);

  const toggleAllDetails = () => {
    setShowAllDetails(!showAllDetails);
  };

  return (
    <div className="p-4 overflow-x-auto  w-full">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full">
        {providers?.map((provider) => (
          <div
            key={provider.name}
            className="max-w-[400px] mx-auto border-4 border-green-200 shadow-lg rounded-xl p-4 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={provider.imageUrl}
                  alt={provider.name}
                  className="lg:h-14 lg:w-14 h-12 w-12 object-contain mr-4"
                />
                <h2 className="text-sm lg:text-base font-bold font-mono text-gray-800">
                  {provider.name}
                </h2>
              </div>
              <button
                onClick={toggleAllDetails}
                className="p-2 hover:bg-green-50 rounded-full transition-all duration-300"
                aria-label="Toggle details"
              >
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    showAllDetails ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 font-mono">
                {provider.description}
              </p>
              <p className="text-sm font-mono text-black-500 mb-4">
                <strong>Features:</strong> {provider.features.join(', ')}
              </p>
              <p className="text-sm font-mono text-black-500 mb-4">
                <strong>Fits For:</strong> {provider.fitsFor.join(', ')}
              </p>
              <p className="text-sm font-mono text-black-500 mb-4">
                <strong>Skill Level:</strong> {provider.skillLevel}
              </p>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showAllDetails
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="mt-4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
