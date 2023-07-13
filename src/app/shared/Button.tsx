import { FC } from "react";
import { useDispatch } from "react-redux";

const Button: FC<{ Text: string }> = ({ Text }) => {

  return (
    <button
      className="bg-blue-100 text-[#0000ff] px-6 py-3 rounded-md hover:shadow-xl font-semibold  text-lg"
    >
      {Text}
    </button>
  );
};
export { Button };