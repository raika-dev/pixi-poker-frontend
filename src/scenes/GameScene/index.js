import { Container, Sprite, useTick } from "@pixi/react";
import { useRef, useState } from "react";
import Background from "../../components/Background";
import Card from "../../components/Card";

const initialCardPositions = [
  { x: -72, y: 200 },
  { x: 0, y: 200 },

  { x: 478, y: 0 },
  { x: 550, y: 0 },

  { x: 378, y: -300 },
  { x: 450, y: -300 },

  { x: -72, y: -400 },
  { x: 0, y: -400 },

  { x: -478, y: -300 },
  { x: -550, y: -300 },

  { x: -570, y: 0 },
  { x: -642, y: 0 },
];

const annotationPositions = [
  { x: -96, y: 300 },
  { x: 454, y: 100 },
  { x: 354, y: -200 },
  { x: -96, y: -300 },
  { x: -574, y: -200 },
  { x: -666, y: 100 },
];

const GameScene = (props) => {
  const { size } = props;
  const [cardPositions, setCardPositions] = useState(initialCardPositions);
  const timeIter = useRef(0);

  useTick((delta) => {
    const currentMs = (timeIter.current += 0.05 * delta);
  });

  return (
    <Container>
      <Background
        image="day-background"
        anchor={{ x: 0.5, y: 0.5 }}
        stageSize={size}
      >
        <Sprite image="day-deck" anchor={{ x: 0.5, y: 0.5 }} />
        {cardPositions.map((pos, index) => (
          <Sprite image="day-card" position={pos} key={"card-" + index} />
        ))}
        {annotationPositions.map((pos, index) => (
          <Sprite image="day-annotation" position={pos} key={"anno-" + index} />
        ))}
      </Background>
    </Container>
  );
};

export default GameScene;
