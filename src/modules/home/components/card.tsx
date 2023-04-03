import React from 'react';
import { ReactComponent as CaretRightSvg } from 'shared/assets/svg/caret-right.svg';

type CardProps = {
  title: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex h-full w-full flex-col gap-3 rounded-[5px] border-[1px] border-solid border-[#C8C8C8] px-8 py-10">
      <span className="flex gap-3 font-['Poppins'] text-xl font-[600]">
        {title} <CaretRightSvg className="h-auto w-[9px]" />
      </span>
      <p className="font-['Poppins'] text-lg font-[400] text-gray-600">{description}</p>
    </div>
  );
};
