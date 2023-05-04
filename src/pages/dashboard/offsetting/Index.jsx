import BottomPart from "./BottomPart";
import TopPart from "./TopPart";

const Offsetting = () => {
  return (
    <div className="wrapper">
      <div className="contain flex-col gap-8 justify-start items-center">
        <TopPart />
        <BottomPart />
      </div>
    </div>
  );
};

export default Offsetting;
