import { Provider } from '@/schema/tools.schema';
import React, { useState } from 'react';
import Modal from './Modal';

type TableProps = {
  providers: Provider[];
};

const Table: React.FC<TableProps> = ({ providers }) => {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(
    null,
  );

  const openModal = (provider: Provider) => {
    setSelectedProvider(provider);
  };

  const closeModal = () => {
    setSelectedProvider(null);
  };

  return (
    <div className="p-4 overflow-x-auto w-full">
      <div className="grid grid-cols-3 gap-4 w-full h-full">
        {providers?.map((provider) => (
          <div
            key={provider.name}
            className="max-w-[400px] border-4 border-green-200 shadow-lg rounded-xl p-4 flex flex-col cursor-pointer"
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
              {selectedProvider?.features.join(', ') || 'N/A'}
            </p>
            <p className="text-sm font-mono text-black-500 mb-4">
              <strong>Fits For:</strong>{' '}
              {selectedProvider?.fitsFor.join(', ') || 'N/A'}
            </p>
            <p className="text-sm font-mono text-black-500 mb-4">
              <strong>Skill Level:</strong>{' '}
              {selectedProvider?.skillLevel || 'N/A'}
            </p>
            <button
              onClick={() => openModal(provider)}
              className="bg-green-500 mt-auto text-white px-4 py-2 rounded-md font-mono"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedProvider} onClose={closeModal}>
        {selectedProvider && (
          <div>
            <div className="flex items-center mb-4">
              <img
                src={selectedProvider.imageUrl}
                alt={selectedProvider.name}
                className="h-20 w-20 object-contain mr-4"
              />
              <h2 className="text-xl font-bold font-mono text-gray-800">
                {selectedProvider.name}
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-4 font-mono">
              {selectedProvider.description}
            </p>
            <p className="text-sm font-mono text-black-500 mb-4">
              <strong>Features:</strong>{' '}
              {selectedProvider?.features.join(', ') || 'N/A'}
            </p>
            <p className="text-sm font-mono text-black-500 mb-4">
              <strong>Fits For:</strong>{' '}
              {selectedProvider?.fitsFor.join(', ') || 'N/A'}
            </p>
            <p className="text-sm font-mono text-black-500 mb-4">
              <strong>Skill Level:</strong>{' '}
              {selectedProvider?.skillLevel || 'N/A'}
            </p>
            <div>
              <h3 className="text-md font-mono font-semibold mb-2 text-gray-700">
                Pricing Tiers
              </h3>
              <div className="space-y-4 font-mono">
                {selectedProvider.pricingTiers.map((tier) => (
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
        )}
      </Modal>
    </div>
  );
};

export default Table;
