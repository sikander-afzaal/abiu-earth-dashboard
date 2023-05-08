import { useState } from "react";

const Notification = () => {
  const [tabs, setTabs] = useState("All");
  return (
    <div className="rounded-[8px] z-[60] top-[80px] sm:top-full shadow-notif fixed sm:absolute right-1/2 sm:translate-x-0 translate-x-1/2 sm:right-full bg-white flex justify-start items-start flex-col  w-[95%] sm:w-[400px]">
      <div className="flex py-6 px-4 justify-between items-center w-full">
        <p className="text-[#0F172A] text-xl font-bold font-inter">
          Notifications
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#475569"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="w-full  flex justify-start items-center px-4  gap-4">
        {["All", "Unread", "Anythings"].map((elem, idx) => {
          return (
            <button
              onClick={() => setTabs(elem)}
              key={idx + elem}
              className={`relative pb-3 flex justify-center items-center gap-2 ${
                tabs === elem
                  ? "text-secondary font-semibold"
                  : "text-[#64748B] font-medium"
              } text-sm font-inter px-2`}
            >
              {elem}
              <span
                className={`${
                  tabs === elem
                    ? "bg-[#E7F7EF] text-secondary "
                    : "text-[#747681] bg-[#EEEFF2] "
                } font-semibold text-[10px] w-5 h-5 grid place-items-center rounded-full`}
              >
                2
              </span>
              {elem === tabs && (
                <span className="absolute top-full left-0 w-full bg-secondary h-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
      <div className="flex justify-start items-start flex-col w-full">
        <NotifItems
          img="/avatar.png"
          category="/test-notif.png"
          name="James Eusobio"
          item="Blue Jeans Polos Slim Fit"
          price="$199.00"
          time="23 mins ago"
          unread
        />
        <NotifItems
          img="/avatar.png"
          category="/test-notif.png"
          name="James Eusobio"
          item="Blue Jeans Polos Slim Fit"
          price="$199.00"
          time="23 mins ago"
        />
        <NotifItems
          img="/avatar.png"
          category="/test-notif.png"
          name="James Eusobio"
          item="Blue Jeans Polos Slim Fit"
          price="$199.00"
          time="23 mins ago"
          unread
        />
      </div>
      <div className="flex justify-between items-center w-full gap-2 py-6 px-4">
        <button className="flex justify-start items-center gap-2">
          <img src="/double-tick.png" className="w-5 object-contain" alt="" />
          <p className="text-secondary text-sm font-semibold font-inter">
            Mark all as read
          </p>
        </button>
        <button className="text-secondary text-sm font-semibold font-inter">
          See All Notifications
        </button>
      </div>
    </div>
  );
};

export default Notification;

const NotifItems = ({ img, category, name, item, price, time, unread }) => {
  return (
    <div
      className={`p-6 flex justify-start border-y border-solid border-[#EEEFF2] items-start gap-4 w-full  ${
        unread ? "bg-[#F9FAFB]" : "bg-transparent"
      }`}
    >
      <div className="relative">
        <img
          src={img}
          className="w-[48px] min-w-[48px]  object-contain rounded-full"
          alt=""
        />
        <img
          src={category}
          className="w-5 h-5 translate-x-[30%] absolute bottom-0 right-0"
          alt=""
        />
      </div>
      <div>
        <p className="font-medium font-inter text-sm text-[#747681]">
          <span className="text-[#04091e]">{name}</span> placed a new order for{" "}
          <span className="text-[#04091E]">{item}</span> totaling{" "}
          <span className="text-secondary">{price}</span>
        </p>
        <p className="text-[#94a3b8] mt-1 text-xs font-inter ">{time}</p>
      </div>
    </div>
  );
};
