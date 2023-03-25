import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes';

const SamplePage: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <p className="mb-10 text-center font-['Poppins'] text-3xl font-[500] md:text-5xl">
        Samples:{' '}
      </p>
      <Link to={ROUTES.TODOS}>
        <p className="w-[150px] rounded-[5px] border-[1px] border-solid border-[#C8C8C8] py-2 text-center font-['Poppins'] text-2xl font-[400] md:text-4xl">
          TODOS
        </p>
      </Link>
      <Link to={ROUTES.LOGIN}>
        <p className="w-[150px] rounded-[5px] border-[1px] border-solid border-[#C8C8C8] py-2 text-center font-['Poppins'] text-2xl font-[400] md:text-4xl">
          BASIC AUTH
        </p>
      </Link>
    </div>
  );
};

export default SamplePage;
