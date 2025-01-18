import { BsDash } from "react-icons/bs";

const DashTitle = ({ title, className }: any) => {
  return (
    <div className={`flex items-center -ms-2 ${className}`}>
      <BsDash
        size={50}
        className="fill-mainColor dark:fill-mainDarkColor w-fit"
      />
      <span className="text-black dark:text-white -ms-1">{title}</span>
    </div>
  );
};

export default DashTitle;
