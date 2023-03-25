import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BossRODSvg } from 'shared/assets/svg/bossrod.svg';
import { ReactComponent as MinusSvg } from 'shared/assets/svg/minus.svg';
import { ReactComponent as PlusSvg } from 'shared/assets/svg/plus.svg';
import { ROUTES } from 'shared/constants/routes';
import { Card } from './components/Card';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center gap-12 py-10">
      <div className="flex h-[267px] w-[267px] items-center justify-center rounded-xl bg-black">
        <BossRODSvg className="mt-10 h-auto w-[80%]" />
      </div>
      <h1 className="font-['Poppins'] text-2xl font-[600] md:text-4xl">@bossrodtv/create-app</h1>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-4">
          <button
            className="flex h-[79px] w-[93px] items-center justify-center rounded-[5px] border-[1px] border-solid border-[#C8C8C8]"
            onClick={handleDecrement}
          >
            <MinusSvg className="h-auto w-[44px]" />
          </button>
          <span className="flex h-[79px] w-[93px] items-center justify-center rounded-[5px] bg-black font-['Poppins'] text-4xl font-[600] text-white">
            {count}
          </span>
          <button
            className="flex h-[79px] w-[93px] items-center justify-center rounded-[5px] border-[1px] border-solid border-[#C8C8C8]"
            onClick={handleIncrement}
          >
            <PlusSvg className="h-auto w-[44px]" />
          </button>
        </div>
        <p className="font-['Poppins'] text-gray-600">
          Counter Playground.{' '}
          <span className="cursor-pointer hover:underline" onClick={handleReset}>
            Reset
          </span>
        </p>
      </div>
      <div className="container px-5">
        <p className="mb-3 font-['Poppins'] text-2xl font-[400]">Read more</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          <a
            href="https://github.com/bossrodtv/create-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              title="Documentation"
              description="Find more information about @bossrodtv/create-app"
            />
          </a>
          <a href="https://github.com/bossrodtv" target="_blank" rel="noopener noreferrer">
            <Card title="OSS" description="Find more about open-source software of @bossrodtv." />
          </a>
          <Link to={ROUTES.SAMPLES}>
            <Card
              title="Samples"
              description="Sample functionality and pages implemented such as Todos and basic auth."
            />
          </Link>
        </div>
      </div>
      <div className="container px-5">
        <p className="mb-3 font-['Poppins'] text-2xl font-[400]">Community</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          <a
            href="https://www.facebook.com/groups/bossrodprogrammingph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              title="Community"
              description="Join us! We are a community of programmers and developers."
            />
          </a>
          <a href="https://youtube.com/bossRODTV" target="_blank" rel="noopener noreferrer">
            <Card title="Tutorials" description="Explore and learn from bossROD TV tutorials." />
          </a>
          <a
            href="https://www.facebook.com/pRODgrammer21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              title="Page"
              description="Follow our facebook page for more information about programming."
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
