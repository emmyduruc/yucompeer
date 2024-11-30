import { CgSearchLoading } from 'react-icons/cg';

export const Loading = () => {
  return (
    <div className="text-green-500 justify-center flex-col">
      <CgSearchLoading size={40} />
      <h4>Loading...</h4>
    </div>
  );
};
