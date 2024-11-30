import { MdError } from 'react-icons/md';

export const ErrorLoader = () => {
  return (
    <div className="text-red-500 justify-center flex-col">
      <MdError size={40} />
      <h4>Error loading categories</h4>
    </div>
  );
};
