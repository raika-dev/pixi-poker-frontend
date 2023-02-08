import { PixiComponent, applyDefaultProps } from "@pixi/react";
import { Sprite } from "pixi.js";

const marginXPercentage = 0.06;
const marginYPercentage = 0.24;

const Deck = PixiComponent("Deck", {
  create: () => {
    return Sprite.from("day-deck");
  },
  applyProps: (instance, oldProps, newProps) => {
    const { stageSize: oldStageSize, ...oldP } = oldProps;
    const { stageSize: newStageSize, ...newP } = newProps;

    applyDefaultProps(instance, oldP, newP);
    const bgOriginWidth = instance.width / instance.scale.x;
    const bgOriginHeight = instance.height / instance.scale.y;

    let dstWidth = newStageSize.width * (1 - marginXPercentage * 2);
    let dstHeight = newStageSize.height * (1 - marginYPercentage * 2);
    dstWidth = dstHeight * 2;

    instance.position.x = (newStageSize.width - dstWidth) / 2;
    instance.position.y = (newStageSize.height - dstHeight) / 2;
    instance.scale.x = dstWidth / bgOriginWidth;
    instance.scale.y = dstHeight / bgOriginHeight;
  },
});

export default Deck;
