"use client"
import { FC } from "react";
import { useDispatch } from "react-redux";
import {cartActions} from '../../app/components/counterslice/Basket'

const Button: FC<{ Text: string }> = ({ Text }) => {
  const dispatch = useDispatch();
  const additem = () => {
    dispatch(cartActions.addToCart({quantity:1,product:0}));
  };
  return (
    <button
      onClick={additem}
      className="bg-blue-100 text-[#0000ff] px-6 py-2 rounded-md hover:shadow-xl font-semibold  text-lg hover:scale-105 duration-300"
    >
      {Text}
    </button>
  );
};
export { Button };
