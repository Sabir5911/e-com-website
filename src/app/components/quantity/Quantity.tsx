'use client'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { cartActions } from "../../components/counterslice/counterSlice";
const Quantity = () => {
  const dispatch=useDispatch()
  const counterTable=useSelector((state:RootState) => state.counterSlice.value) 
  const Increment=()=>{
    dispatch(cartActions.increment()); 
    }
    const discrrement=()=>{
        dispatch(cartActions.decrement()); 
        }
   return (
    <div className="flex items-center gap-x-2 text-2xl">
      {/* Minus */}        
      <button
        onClick={discrrement}
        className="w-8 h-8 border rounded-full center"
      >
        -
      </button>
      {/* Number */}
      <span className="text-sm">{counterTable}</span>
      {/* Plus */}
      <button
        className="w-8 h-8 border rounded-full center text-2xl"
        onClick={Increment}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
