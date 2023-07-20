import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAlert, deleteAlert, updateAlert } from "../features/alertSlice";

const asyncEventChain = async (events) => {
  if (events.length <= 0) return;
  const [{ callback, delay }, ...nextEvents] = events;
  setTimeout(() => {
    callback();
    asyncEventChain(nextEvents);
  }, delay);
};

export const useAlert = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const createTimedAlert = ({ duration = 1000, ...alert }) => {
    alert.duration = duration;
    alert.id = count;
    setCount((prevCount) => prevCount + 1);
    dispatch(createAlert(alert));
    setTimeout(() => {
      dispatch(deleteAlert(alert.id));
    }, duration);
  };

  const createAnimatedTimedAlert = ({
    duration = 5000,
    fadeTime = 500,
    ...alert
  }) => {
    alert.duration = duration;
    alert.id = count;
    const classesParam = alert.className ?? "";
    alert.className = classesParam + " faded";
    setCount((prevCount) => prevCount + 1);
    asyncEventChain([
      { callback: () => dispatch(createAlert(alert)), delay: 0 },
      {
        callback: () =>
          dispatch(
            updateAlert({
              id: alert.id,
              toChange: { className: `${classesParam}` },
            })
          ),
        delay: 25,
      },
      {
        callback: () =>
          dispatch(
            updateAlert({
              id: alert.id,
              toChange: { className: `${classesParam} faded` },
            })
          ),
        delay: duration - fadeTime,
      },
      {
        callback: () => dispatch(deleteAlert(alert.id)),
        delay: fadeTime,
      },
    ]);
  };

  return { createTimedAlert, createAnimatedTimedAlert };
};
