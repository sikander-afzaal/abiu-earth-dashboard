import Analytics from "./Analytics";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="wrapper gap-8">
      <p className="text-primaryShade sm:hidden block text-center text-[22px] font-bold">
        Automated Emissions analysis
      </p>
      <Analytics />
      <Categories />
    </div>
  );
};

export default Home;
