const MarketSummary: React.FC = ({ baseCurrency, quoteCurrency}: any) => {
  return (
    <>
      <div className="sm:flex sm:flex-row h-full w-full">
        <div className="w-full sm:w-3/12 flex items-center">
          <h1 className="font-semibold text-xl">{baseCurrency}/{quoteCurrency}</h1>
        </div>
        <div className="w-full sm:w-2/12 font-mono flex flex-col justify-center items font-semibold">
          <h2 className="text-2xl font-bold">64.5</h2>
          <h3 className="text-xs font-bold text-gray-500">{quoteCurrency} 45.28</h3>
          <div className="flex sm:hidden space-x-2 text-light-red font-bold sm:font-semibold text-sm my-1">
            <h3>-2.30</h3>
            <h3>-1.25%</h3>
          </div>
        </div>
        <div className="w-full font-mono flex items-center sm:space-x-8 font-bold sm:font-semibold">
          <div className="text-xs">
            <h2 className="mb-1 hidden sm:block text-gray-500">24h Change</h2>
            <div className="hidden sm:flex space-x-2 text-light-red font-bold sm:font-semibold">
              <h3>-2.30</h3>
              <h3>-1.25%</h3>
            </div>
          </div>
          <div className="text-xs mt-2">
            <h2 className="mb-1 text-gray-500">24h High</h2>
            <h3>66.25</h3>
          </div>
          <div className="text-xs mt-2 ml-4">
            <h2 className="mb-1 text-gray-500">24h Low</h2>
            <h3>60.15</h3>
          </div>
          <div className="text-xs mt-2 ml-4">
            <h2 className="mb-1 text-gray-500">24h Volume({baseCurrency})</h2>
            <h3>103,045.25</h3>
          </div>
          <div className="text-xs mt-2 ml-4">
            <h2 className="mb-1 text-gray-500">24h Volume({quoteCurrency})</h2>
            <h3>6,739,159.35</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketSummary;
