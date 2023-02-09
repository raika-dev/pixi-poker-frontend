import { Sprite, useTick } from "@pixi/react";
import { useState, useReducer, useRef } from "react";

const reducer = (_, { data }) => data;
const Card = (props) => {
  const [motion, update] = useReducer(reducer, {
    ...props.src,
  });
  const iter = useRef(0);

  useTick((delta) => {
    let i = (iter.current += 0.05 * delta);
    i = Math.min(i, 0.5);

    update({
      type: "update",
      data: {
        x: props.src.x + ((props.dst.x - props.src.x) / 0.5) * i,
        y: props.src.y + ((props.dst.y - props.src.y) / 0.5) * i,
      },
    });
  });
  return <Sprite image="day-card" {...motion} />;
};

export default Card;
