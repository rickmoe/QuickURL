import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAlert, deleteAlert } from "../features/alertSlice";

export const useAlert = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const createTimedAlert = ({ duration, ...alert }) => {
    alert.id = count;
    setCount((prevCount) => prevCount + 1);
    dispatch(createAlert(alert));
    setTimeout(() => {
      dispatch(deleteAlert(alert.id));
    }, duration);
  };

  return { createTimedAlert };
};
