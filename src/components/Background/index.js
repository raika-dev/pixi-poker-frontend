import { PixiComponent, applyDefaultProps } from "@pixi/react";
import { Sprite } from "pixi.js";

const Background = PixiComponent("Background", {
  create: () => {
    return Sprite.from("day-background");
  },
  applyProps: (instance, oldProps, newProps) => {
    const { stageSize: oldStageSize, ...oldP } = oldProps;
    const { stageSize: newStageSize, ...newP } = newProps;

    applyDefaultProps(instance, oldP, newP);
    const bgOriginWidth = instance.width / instance.scale.x;
    const bgOriginHeight = instance.height / instance.scale.y;

    const ratioX = newStageSize.width / bgOriginWidth;
    const ratioY = newStageSize.height / bgOriginHeight;
    instance.scale.x = ratioX;
    instance.scale.y = ratioY;
    // instance.scale.x = instance.scale.y = Math.max(ratioX, ratioY);
  },
});

export default Background;
