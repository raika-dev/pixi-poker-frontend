import { Sprite, useTick } from "@pixi/react";
import { useState, useReducer, useRef, useEffect } from "react";
import { MOVE_TIME, RISE_TIME } from "../../helpers/utils";

const reducer = (_, { data }) => data;
const Card = (props) => {
  const [motion, update] = useReducer(reducer, {
    ...props.src,
  });
  const iter = useRef(0);
  useEffect(() => {
    iter.current = 0;
  }, [props]);

  useTick((delta) => {
    let t = (iter.current += 0.05 * delta);
    t = Math.min(
      Math.max(0, t - (props.order ?? 0) * 0.3),
      MOVE_TIME + RISE_TIME
    );

    if (t < MOVE_TIME) {
      update({
        type: "update",
        data: {
          image: "day-card",
          x: props.src.x + (props.dst.x - props.src.x) / (MOVE_TIME + 0.05) * t,
          y: props.src.y + (props.dst.y - props.src.y + 120) / (MOVE_TIME + 0.05) * t,
          // alpha: 1 / (MOVE_TIME / 2) * (MOVE_TIME / 2 - Math.abs(MOVE_TIME / 2 - t)),
          alpha: 1 / MOVE_TIME * (MOVE_TIME - t),
        },
      });
    } else { // RISE
      t -= MOVE_TIME;
      update({
        type: "update",
        data: {
          image: "day-card",
          x: props.dst.x,
          y: props.dst.y + 70 * (Math.pow(RISE_TIME - t, 3)) / Math.pow(RISE_TIME, 3),
          alpha: 1 / RISE_TIME * t,
        },
      });
    }
  });
  return <Sprite image="day-card" {...motion}/>;
};

export default Card;
