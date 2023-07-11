import { FC } from "react";
import { useDispatch } from "react-redux";

const Button: FC<{ Text: string }> = ({ Text }) => {

  return (
    <button
      className="bg-blue-100 text-[#0000ff] px-2 py-2 rounded-md hover:shadow-xl font-semibold  text-lg hover:scale-105 duration-300"
    >
      {Text}
    </button>
  );
};
export { Button };
