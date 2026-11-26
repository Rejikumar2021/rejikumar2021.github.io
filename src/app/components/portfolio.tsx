import PortfolioTabs from "./portfolioTabs";
const portfolio = () => {
  return (
    <>
      <div className="max-w-360 m-auto w-full py-10 md:py-20">
        <p className="text-[#6249d4] uppercase text-3xl md:text-6xl font-semibold text-center py-0 md:py-10">
          Here &apos;s what I have done with the past
        </p>
        <PortfolioTabs />
      </div>
    </>
  );
};

export default portfolio;
